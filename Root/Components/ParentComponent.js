import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import Children from './ChildrenComponent';
export default class Parent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            messageParent: 'Je me nomme Yves Boah',
            age: 18,
            refresh: false,
        }
    }

    refresh() {
        this.setState({
            refresh: !this.state.refresh,
        })
    }

    updateAge(){
        this.state.age++;
        console.log(this.state);
        this.refresh();
    }

    render(){
        return(
            <Container>
                <Content>
                    <View style={styles.line}>
                    </View>
                    <View style={styles.line}>
                        <Text style={styles.txt}>Contenu Parent:  --hello--</Text>
                    </View>

                    <Children data={[this.state.messageParent, this.state.age]} />

                    <Button onPress={() => this.updateAge()}>
                        <Text>Update Age !</Text>
                    </Button>

                </Content>
                <Footer>
                    <FooterTab>
                        <Button full>
                            <Text>Footer Parent</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
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
        fontSize: 25,
    }
});
