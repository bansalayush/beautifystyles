export const test1 = `
import * as React from 'react';

class Test1 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={{height:100,width:100,backgroundColor:'#f00'}}>
                <Text style={{ textSize:12 , fontFamily: 'ScalaSansOT',fontSize: 12,letterSpacing: this.somestate ? 12: 13 }}>
                    {this.constructor.name}
                </Text>
            </View>
        );
    }}`;
export const test2 = `class Test2 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <Text style={{ textSize:12 , fontFamily: 'ScalaSansOT',fontSize: 12,letterSpacing: 12, }}>
                    {this.constructor.name}
                </Text>
            </View>
        );
    }}`;

// with outline style
export const test3 = `class Test3 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <Text style={styles.discountParent}>
                    {this.constructor.name}
                </Text>
            </View>
        );
    }

}
const a = 2;`;

// stylesheet
const test4 = `const styles = StyleSheet.create({
    discountParent: {
      height: 70,
      flexDirection: 'row',
      paddingHorizontal: 20,
      justifyContent: 'space-between'
    });
`;
