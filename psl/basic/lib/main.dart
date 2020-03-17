import 'package:flutter/material.dart';

void main() => runApp(MyApp(
      TextInput: Text("Hello from main"),
    ));

class MyApp extends StatelessWidget {
  final Widget TextInput;
  MyApp(this.TextInput);
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "Hello",
      home: new Scaffold(
        appBar: AppBar(
          title: Text('hello'),
        ),
        body: Center(
          child: Column(
            children: <Widget>[TextInput],
          ),
        ),
      ),
    );
  }
}
