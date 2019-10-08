import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'native-base';
import { withNavigation } from 'react-navigation';

class Children extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        console.log(props)
    }

    render() {
        return (
            <View>
                <View style={styles.line}>
                </View>
                <Text style={styles.txt}>
                    Contenu Enfant + {this.props.data[0]}
                </Text>
                <Text style={styles.txt}>
                    Age Enfant + {this.props.data[1]}
                </Text>
                <View style={styles.line}>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    line: {
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        paddingTop: 15,
    },
    txt: {
        color: 'black',
        fontSize: 15,
    }
});

export default withNavigation(Children)