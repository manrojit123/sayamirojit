import 'package:flutter/material.dart';

void main() => runApp(MaterialApp(
      // debugShowCheckedModeBanner: false,
      home: HamroApp(),
    ));

class HamroApp extends StatefulWidget {
  @override
  _HamroAppState createState() => _HamroAppState();
}

class _HamroAppState extends State<HamroApp> {
  String name = "Hello Man2";

  void _raisedClick() {
    setState(() {
      name = "Raised is pressed";
    });
  }

  void _flatClicked() {
    setState(() {
      name = "Flat is pressed";
    });
  }

  void _iconPressed() {
    setState(() {
      name = DateTime.now().toString();
    });
  }

  bool _value = false;
  void _onChangeSwitch(bool value) {
    setState(() {
      _value = value;
      if (value == true) {
        name = "Switch on";
      } else {
        name = "Switch off";
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Hello')),
      body: Container(
        padding: EdgeInsets.all(12.5),
        child: Column(
          children: <Widget>[
            Switch(
              value: _value,
              onChanged: _onChangeSwitch,
            ),
            SwitchListTile(
              value: _value,
              onChanged: _onChangeSwitch,
              activeColor: Colors.orange,
              subtitle: Text('Are you Married?'),
              title: Text('Marital Status'),
            ),
            TextField(
              decoration: InputDecoration(
                labelText: "Enter name",
                hintText: "Your Name",
                icon: Icon(Icons.people),
              ),
              keyboardType: TextInputType.emailAddress,
            ),
            Text(name),
            Image.asset("img/img.jpg"),
            RaisedButton(
              onPressed: _raisedClick,
              child: Text('Click Me'),
              padding: EdgeInsets.all(12.5),
            ),
            FlatButton(
              onPressed: _flatClicked,
              child: Text('Flat Button'),
            ),
            IconButton(
              onPressed: _iconPressed,
              icon: Icon(Icons.add),
            ),
            IconButton(
              icon: Image.asset('img/img.jpg'),
              onPressed: () {},
            )
          ],
        ),
      ),
    );
  }
}
