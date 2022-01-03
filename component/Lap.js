import React from 'react'
import { FlatList, Text, View, StyleSheet } from 'react-native'

const Lap = (props) => {
    return (
        <FlatList data={props.dataList}
            renderItem={(lap) =>
                <View>
                    <View style={styles.lapWrapper}>
                        <Text style={styles.lapText}>{`Lap ${lap.index}`}</Text>
                        <Text style={styles.lapTime}>{lap.item}</Text>
                    </View>
                    <View style={styles.bottomBorder} />
                </View>
            }
            keyExtractor={(item, index) => index}
        />
    )
}

const styles = StyleSheet.create({
    lapWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 10,
        marginTop: 10,
        borderColor: '#FFF',
    },
    lapText: {
        color: '#FFF',
        fontSize: 18,
    },
    lapTime: {
        color: '#FFF',
        fontSize: 18,
    },
    bottomBorder: {
        borderBottomColor: '#5B6263',
        borderBottomWidth: .3,
        opacity: 0.4
    },
})

export default Lap;