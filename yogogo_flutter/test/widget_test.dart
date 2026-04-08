import 'package:flutter_test/flutter_test.dart';
import 'package:yogogo_flutter/main.dart';

void main() {
  testWidgets('renders navigation tabs', (WidgetTester tester) async {
    await tester.pumpWidget(const YogogoApp());

    expect(find.text('Home'), findsOneWidget);
    expect(find.text('Classes'), findsOneWidget);
    expect(find.text('Collections'), findsOneWidget);
    expect(find.text('Profile'), findsOneWidget);
  });
}
