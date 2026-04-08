import 'package:flutter/material.dart';

void main() {
  runApp(const YogogoApp());
}

class YogogoApp extends StatelessWidget {
  const YogogoApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Yogogo',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: const Color(0xFF3D87A3)),
        useMaterial3: true,
      ),
      home: const MainShell(),
      debugShowCheckedModeBanner: false,
    );
  }
}

class MainShell extends StatefulWidget {
  const MainShell({super.key});

  @override
  State<MainShell> createState() => _MainShellState();
}

class _MainShellState extends State<MainShell> {
  int _currentIndex = 0;

  final List<Widget> _tabs = const [
    HomeScreen(),
    ClassesScreen(),
    CollectionsScreen(),
    ProfileScreen(),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: _tabs[_currentIndex],
      bottomNavigationBar: NavigationBar(
        selectedIndex: _currentIndex,
        onDestinationSelected: (index) {
          setState(() {
            _currentIndex = index;
          });
        },
        destinations: const [
          NavigationDestination(icon: Icon(Icons.home_outlined), label: 'Home'),
          NavigationDestination(
            icon: Icon(Icons.video_library_outlined),
            label: 'Classes',
          ),
          NavigationDestination(
            icon: Icon(Icons.view_carousel_outlined),
            label: 'Collections',
          ),
          NavigationDestination(icon: Icon(Icons.person_outline), label: 'Profile'),
        ],
      ),
    );
  }
}

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return CustomScrollView(
      slivers: [
        SliverAppBar.large(
          title: const Text('Yogogo'),
          actions: [
            IconButton(
              icon: const Icon(Icons.search),
              onPressed: () {},
            ),
            IconButton(
              icon: const Icon(Icons.favorite_border),
              onPressed: () {},
            ),
          ],
        ),
        SliverToBoxAdapter(
          child: Padding(
            padding: const EdgeInsets.all(16),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                _HeroCard(),
                const SizedBox(height: 24),
                const Text(
                  'Discover Something New',
                  style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
                ),
                const SizedBox(height: 12),
                const FeatureGrid(),
                const SizedBox(height: 24),
                const Text(
                  'Featured Classes',
                  style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
                ),
                const SizedBox(height: 12),
                ...sampleClasses.take(4).map((yogaClass) {
                  return Padding(
                    padding: const EdgeInsets.only(bottom: 12),
                    child: ClassCard(yogaClass: yogaClass),
                  );
                }),
                const SizedBox(height: 24),
                const Text(
                  'Top Teachers',
                  style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
                ),
                const SizedBox(height: 12),
                SizedBox(
                  height: 100,
                  child: ListView.separated(
                    scrollDirection: Axis.horizontal,
                    itemCount: sampleTeachers.length,
                    separatorBuilder: (_, __) => const SizedBox(width: 12),
                    itemBuilder: (context, index) {
                      return TeacherChip(teacher: sampleTeachers[index]);
                    },
                  ),
                ),
                const SizedBox(height: 30),
              ],
            ),
          ),
        ),
      ],
    );
  }
}

class ClassesScreen extends StatefulWidget {
  const ClassesScreen({super.key});

  @override
  State<ClassesScreen> createState() => _ClassesScreenState();
}

class _ClassesScreenState extends State<ClassesScreen> {
  String _selectedType = 'All';
  String _selectedLevel = 'All';

  @override
  Widget build(BuildContext context) {
    final filtered = sampleClasses.where((c) {
      final typeMatch = _selectedType == 'All' || c.type == _selectedType;
      final levelMatch = _selectedLevel == 'All' || c.level == _selectedLevel;
      return typeMatch && levelMatch;
    }).toList();

    return Scaffold(
      appBar: AppBar(title: const Text('Classes')),
      body: Column(
        children: [
          Padding(
            padding: const EdgeInsets.all(16),
            child: Row(
              children: [
                Expanded(
                  child: DropdownButtonFormField<String>(
                    value: _selectedType,
                    decoration: const InputDecoration(labelText: 'Category'),
                    items: const ['All', 'Move', 'Meditate', 'Nourish']
                        .map((type) => DropdownMenuItem(
                              value: type,
                              child: Text(type),
                            ))
                        .toList(),
                    onChanged: (value) =>
                        setState(() => _selectedType = value ?? 'All'),
                  ),
                ),
                const SizedBox(width: 12),
                Expanded(
                  child: DropdownButtonFormField<String>(
                    value: _selectedLevel,
                    decoration: const InputDecoration(labelText: 'Level'),
                    items: const ['All', 'Level 1', 'Level 2', 'Level 3']
                        .map((level) => DropdownMenuItem(
                              value: level,
                              child: Text(level),
                            ))
                        .toList(),
                    onChanged: (value) =>
                        setState(() => _selectedLevel = value ?? 'All'),
                  ),
                ),
              ],
            ),
          ),
          Expanded(
            child: ListView.separated(
              padding: const EdgeInsets.symmetric(horizontal: 16),
              itemCount: filtered.length,
              separatorBuilder: (_, __) => const SizedBox(height: 12),
              itemBuilder: (context, index) {
                return ClassCard(yogaClass: filtered[index]);
              },
            ),
          ),
        ],
      ),
    );
  }
}

class CollectionsScreen extends StatelessWidget {
  const CollectionsScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Collections')),
      body: ListView.separated(
        padding: const EdgeInsets.all(16),
        itemCount: sampleCollections.length,
        separatorBuilder: (_, __) => const SizedBox(height: 12),
        itemBuilder: (context, index) {
          final collection = sampleCollections[index];
          return Card(
            child: ListTile(
              contentPadding: const EdgeInsets.all(16),
              title: Text(
                collection.name,
                style: const TextStyle(fontWeight: FontWeight.bold),
              ),
              subtitle: Text(
                '${collection.classCount} classes • ${collection.duration}',
              ),
              trailing: const Icon(Icons.chevron_right),
            ),
          );
        },
      ),
    );
  }
}

class ProfileScreen extends StatelessWidget {
  const ProfileScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('My Practice')),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: const [
          ListTile(
            leading: CircleAvatar(child: Icon(Icons.self_improvement)),
            title: Text('Yogogo Member'),
            subtitle: Text('15-day free trial active'),
          ),
          Divider(),
          ListTile(
            leading: Icon(Icons.favorite_outline),
            title: Text('Favorites'),
          ),
          ListTile(
            leading: Icon(Icons.view_list_outlined),
            title: Text('My Collections'),
          ),
          ListTile(
            leading: Icon(Icons.history),
            title: Text('Recently Viewed'),
          ),
          ListTile(
            leading: Icon(Icons.settings_outlined),
            title: Text('Account Settings'),
          ),
        ],
      ),
    );
  }
}

class _HeroCard extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(20),
        gradient: const LinearGradient(
          colors: [Color(0xFF3D87A3), Color(0xFF668A9F)],
        ),
      ),
      child: const Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            'Anytime, Anywhere',
            style: TextStyle(color: Colors.white70),
          ),
          SizedBox(height: 8),
          Text(
            '1,000+ Online Yoga Classes At Your Fingertips',
            style: TextStyle(
              color: Colors.white,
              fontSize: 20,
              fontWeight: FontWeight.bold,
            ),
          ),
          SizedBox(height: 12),
          FilledButton(
            onPressed: null,
            child: Text('Start 15-Day Free Trial'),
          ),
        ],
      ),
    );
  }
}

class FeatureGrid extends StatelessWidget {
  const FeatureGrid({super.key});

  @override
  Widget build(BuildContext context) {
    const items = [
      ('Move', Icons.directions_run),
      ('Meditate', Icons.spa_outlined),
      ('Nourish', Icons.restaurant_outlined),
      ('Courses', Icons.school_outlined),
    ];

    return GridView.builder(
      physics: const NeverScrollableScrollPhysics(),
      shrinkWrap: true,
      itemCount: items.length,
      gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: 2,
        mainAxisSpacing: 12,
        crossAxisSpacing: 12,
        childAspectRatio: 2.2,
      ),
      itemBuilder: (context, index) {
        final item = items[index];
        return Card(
          child: Center(
            child: Row(
              mainAxisSize: MainAxisSize.min,
              children: [
                Icon(item.$2),
                const SizedBox(width: 8),
                Text(item.$1),
              ],
            ),
          ),
        );
      },
    );
  }
}

class TeacherChip extends StatelessWidget {
  final Teacher teacher;

  const TeacherChip({super.key, required this.teacher});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        CircleAvatar(radius: 28, child: Text(teacher.initials)),
        const SizedBox(height: 8),
        Text(teacher.name, style: const TextStyle(fontSize: 12)),
      ],
    );
  }
}

class ClassCard extends StatelessWidget {
  final YogaClass yogaClass;

  const ClassCard({super.key, required this.yogaClass});

  @override
  Widget build(BuildContext context) {
    return Card(
      child: ListTile(
        contentPadding: const EdgeInsets.all(16),
        title: Text(
          yogaClass.title,
          style: const TextStyle(fontWeight: FontWeight.bold),
        ),
        subtitle: Text(
          '${yogaClass.type} • ${yogaClass.teacher} • ${yogaClass.level} • ${yogaClass.minutes} min',
        ),
        trailing: IconButton(
          icon: Icon(yogaClass.isFavorite ? Icons.favorite : Icons.favorite_border),
          onPressed: () {},
        ),
      ),
    );
  }
}

class YogaClass {
  final String title;
  final String type;
  final String teacher;
  final String level;
  final int minutes;
  final bool isFavorite;

  const YogaClass({
    required this.title,
    required this.type,
    required this.teacher,
    required this.level,
    required this.minutes,
    this.isFavorite = false,
  });
}

class YogaCollection {
  final String name;
  final int classCount;
  final String duration;

  const YogaCollection({
    required this.name,
    required this.classCount,
    required this.duration,
  });
}

class Teacher {
  final String name;
  final String initials;

  const Teacher(this.name, this.initials);
}

const sampleClasses = [
  YogaClass(
    title: 'Yin & Rest',
    type: 'Move',
    teacher: 'Ligia Jimenez',
    level: 'Level 1',
    minutes: 60,
    isFavorite: true,
  ),
  YogaClass(
    title: 'Blue Sky',
    type: 'Meditate',
    teacher: 'Gen Methot',
    level: 'Level 1',
    minutes: 15,
  ),
  YogaClass(
    title: 'Root to Core',
    type: 'Move',
    teacher: 'Irene Del Valle',
    level: 'Level 2',
    minutes: 30,
  ),
  YogaClass(
    title: 'Pulse: Center',
    type: 'Move',
    teacher: 'Gen Methot',
    level: 'Level 2',
    minutes: 60,
  ),
  YogaClass(
    title: 'Breath and Ground',
    type: 'Meditate',
    teacher: 'Jaime Hepburn',
    level: 'Level 3',
    minutes: 20,
  ),
  YogaClass(
    title: 'Post Practice Smoothie',
    type: 'Nourish',
    teacher: 'Sophie Jaffe',
    level: 'Level 1',
    minutes: 10,
  ),
];

const sampleCollections = [
  YogaCollection(name: 'Morning Glory', classCount: 5, duration: '1h 40m'),
  YogaCollection(name: 'Beginner Series', classCount: 11, duration: '4h 20m'),
  YogaCollection(name: 'Cross Over Series', classCount: 5, duration: '1h 40m'),
  YogaCollection(name: 'Yoga For Sleep', classCount: 6, duration: '2h 00m'),
];

const sampleTeachers = [
  Teacher('Jaime', 'JH'),
  Teacher('Gen', 'GM'),
  Teacher('Irene', 'ID'),
  Teacher('Ligia', 'LJ'),
  Teacher('Sophie', 'SJ'),
];
