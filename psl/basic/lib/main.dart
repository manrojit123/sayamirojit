// import 'home.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(
    MaterialApp(
      theme: ThemeData(
        primarySwatch: Colors.red,
      ),
    ),
    home: Scaffold(
      appBar: AppBar(title: Text("hello")),
    ),
  );
}
