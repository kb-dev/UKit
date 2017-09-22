import React from 'react';
import {View, Text} from 'react-native';
import style from '../../Style';

export default class SectionListHeader extends React.Component {

    constructor(props) {
        super(props);
    }

    getSectionStyle(){
        let indexStyle = this.props.sectionIndex % style.list.sectionHeaders.length;
        return style.list.sectionHeaders[indexStyle];
    }

    render() {
        return (
           <View style={[style.list.sectionHeaderView, this.getSectionStyle()]}>
               <Text style={style.list.sectionHeaderTitle}>{this.props.title}</Text>
           </View>
        );
    }
}