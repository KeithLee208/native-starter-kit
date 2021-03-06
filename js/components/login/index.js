
'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import { DeviceEventEmitter, Dimensions, Image} from 'react-native';
import {Actions} from 'react-native-router-flux';

import {Container, Content, InputGroup, Input, Button, Icon, View } from 'native-base';
import theme from '../../themes/base-theme';
import styles from './styles';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visibleHeight: Dimensions.get('window').height,
            scroll: false
        };
    }
    componentWillMount () {
        DeviceEventEmitter.addListener('keyboardWillShow', this.keyboardWillShow.bind(this))
        DeviceEventEmitter.addListener('keyboardWillHide', this.keyboardWillHide.bind(this))
    }

    keyboardWillShow (e) {
        let newSize = Dimensions.get('window').height - e.endCoordinates.height
        this.setState({scroll: true})
    }

    keyboardWillHide (e) {
        this.setState({scroll: false})
    }

    render() {
        return (
            <Container theme={theme}>
                <View style={styles.container}>
                    <Content>
                        <Image source={require('../../../images/shadow.png')} style={styles.shadow}>
                            <View style={styles.bg}>
                                <InputGroup style={{marginBottom: 20}}>
                                    <Icon name="ios-person" />
                                    <Input placeholder="EMAIL" />
                                </InputGroup>
                                <InputGroup style={{marginBottom: 10}}>
                                    <Icon name="ios-unlock-outline" />
                                    <Input
                                        placeholder="PASSWORD"
                                        secureTextEntry={true}
                                    />
                                </InputGroup>
                                <Button style={{marginTop: 20, alignSelf: 'center'}} textStyle={{color: '#fff'}} onPress={() => Actions.home()}>
                                    Login
                                </Button>
                            </View>
                        </Image>
                    </Content>
                </View>
            </Container>
        )
    }
}

export default (Login);
