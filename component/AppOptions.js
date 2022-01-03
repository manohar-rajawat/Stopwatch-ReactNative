import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const TabButtons = (props) => {
    return (
        <View style={styles.tabButtonWrapper}>
            <TouchableOpacity>
                <View style={styles.iconWrapper}>
                    <Ionicons name="globe-outline" size={30} color="#777a78" />
                    <Text style={styles.tabText}>World Clock</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.iconWrapper}>
                    <Ionicons name="alarm" size={30} color="#777a78" />
                    <Text style={styles.tabText}>Alarm</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.iconWrapper}>
                    <Ionicons name="stopwatch" size={30} color="#eb8b15" />
                    <Text style={styles.tabTextStopwatch}>Stopwatch</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.iconWrapper}>
                    <Ionicons name="timer-outline" size={30} color="#777a78" />
                    <Text style={styles.tabText}>Timer</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    tabButtonWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    tabText: {
        color: '#777a78',
        fontSize: 10,
        marginTop: 1,
    },
    iconWrapper: {
        alignItems: 'center',
    },
    tabTextStopwatch: {
        color: '#eb8b15',
        fontSize: 10,
        marginTop: 1,
    },
})

export default TabButtons