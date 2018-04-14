"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
//works
var test1 = exports.test1 = "class Test1 extends React.Component {\n    constructor(props) {\n        super(props);\n    }\n    render() {\n        return (\n            <View style={{height:100,width:100,backgroundColor:'#f00'}}>\n                <Text style={{ textSize:12 , fontFamily: 'ScalaSansOT',fontSize: 12,letterSpacing: this.somestate ? 12: 13 }}>\n                    {this.constructor.name}\n                </Text>\n            </View>\n        );\n    }}";
// works
var test2 = exports.test2 = "class Test2 extends React.Component {\n    constructor(props) {\n        super(props);\n    }\n    render() {\n        return (\n            <View>\n                <Text>\n                    {this.constructor.name}\n                </Text>\n            </View>\n        );\n    }}";
// TODO: works
var test3 = exports.test3 = "\nconst styles = StyleSheet.create({\n    hey: {\n      height: 100,\n      width: 100,\n      backgroundColor: '#f00'\n    },\n    heya: {\n      textSize: 12,\n      fontFamily: 'ScalaSansOT',\n      fontSize: 12,\n      letterSpacing: this.somestate ? 12 : 13\n    }\n  }); \n  class Test1 extends React.Component {\n    constructor(props) {\n      super(props);\n    }\n    render() {\n      return <View style={styles.heya}>\n                  <Text style={styles.hey}>\n                      {this.constructor.name}\n                  </Text>\n              </View>;\n    }\n  }";

// works
var test4 = exports.test4 = "\n   class Test1 extends React.Component {\n    constructor(props) {\n      super(props);\n    }\n    render() {\n      return \n      <View style={{\n        height: 100,\n        width: 100,\n        backgroundColor: '#f00'\n      }}>\n      <Text style={styles.dummy}>\n        {this.constructor.name}\n      </Text>\n     </View>;\n    }\n  }\n  const styles = StyleSheet.create({\n    dummy: {\n      textSize: 12,\n      fontFamily: 'ScalaSansOT',\n      fontSize: 12,\n      letterSpacing: this.somestate ? 12 : 13\n    }\n  });\n  ";