import 'package:flutter/material.dart';

void main() => runApp(MaterialApp(
      home: HamroApp(),
    ));

class HamroApp extends StatefulWidget {
  @override
  _HamroAppState createState() => _HamroAppState();
}

class _HamroAppState extends State<HamroApp> {
  String name = "Hello Man2";

  void _onClick() {
    setState(() {
      name = "Button is pressed";
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Hello')),
      body: Container(
        child: Column(
          children: <Widget>[
            Text(name),
            RaisedButton(
              onPressed: _onClick,
              child: Text('Click Me'),
            )
          ],
        ),
      ),
    );
  }
}
