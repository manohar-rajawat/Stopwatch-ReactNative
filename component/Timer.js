import React, { useState, useEffect } from 'react';
import { FlatList, Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import formatTime from '../utils/formatTime'
import Lap from './Lap'

//This function will be used to convert the single digit character in two.
let paddingOfTwo = (number) => (number <= 9 ? `0${number}` : number <= 99 ? number : Number(number.toString().slice(0, 2)))

const Timer = () => {
    const [isActive, setIsActive] = useState(false)
    const [lapItems, setLapItems] = useState([])
    const [time, setTime] = useState(0)
    useEffect(() => {
        //This is the mounting code, which will run when the code is component will mounted.
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
            }, 10);
        } else if (!isActive) {
            clearInterval(interval);
        }
        //This is the Clearnup code which will run when the component will unmount.
        return () => clearInterval(interval);
    },
        //This is the updation part. This controlls the updation part.
        [isActive]);

    function handleReset() {
        setLapItems([])
        setTime(0)
    }
    const handleStart = () => {
        setIsActive(!isActive)
    }
    const handlePause = () => {
        setIsActive(!isActive)
    }
    const handleLap = () => {
        setLapItems((lapItems) => [...lapItems, formatTime(time)])
    }
    return (
        <View style={styles.timerWrapper}>
            <View style={styles.timerContainer}>
                <Text style={styles.timer}>{formatTime(time)}</Text>
            </View>
            <View style={styles.optionButtons}>
                {
                    isActive ?
                        <TouchableOpacity onPress={() => handleLap()}>
                            <View style={styles.lapButtonWrapper}>
                                <View style={styles.borderAround}>
                                    <Text style={styles.lapButtonText}>Lap</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity onPress={() => handleReset()}>
                            <View style={styles.lapButtonWrapper}>
                                <View style={styles.borderAround}>
                                    <Text style={styles.lapButtonText}>Reset</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                }

                {
                    !isActive ?
                        <TouchableOpacity onPress={() => handleStart()}>
                            <View style={styles.startButtonWrapper}>
                                <View style={styles.borderAround}>
                                    <Text style={styles.startButtonText}>Start</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity onPress={() => handlePause()}>
                            <View style={styles.startButtonWrapper}>
                                <View style={styles.borderAround}>
                                    <Text style={styles.startButtonText}>Pause</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                }
            </View>
            <View style={styles.betweenBorder}>
                {/*This will draw a line between components */}
            </View>
            <View style={styles.lapList}>
                <Lap dataList={lapItems} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    timerWrapper: {
        paddingHorizontal: 10,
        paddingTop: 155,
    },
    timerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    timer: {
        height: 100,
        color: '#FFF',
        fontSize: 90,
        fontWeight: '200',
        textAlign: 'center',
        justifyContent: 'center',
        fontVariant: ['tabular-nums'],
    },
    optionButtons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 100,
    },
    lapButtonWrapper: {
        height: 86,
        width: 86,
        backgroundColor: '#2B2929',
        borderRadius: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    startButtonWrapper: {
        height: 86,
        width: 86,
        backgroundColor: '#0F281B',
        borderRadius: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    lapButtonText: {
        fontSize: 15,
        color: '#FFF',
        opacity: 0.6,
    },
    startButtonText: {
        fontSize: 15,
        color: '#46EF1C',
    },
    borderAround: {
        width: 82,
        height: 82,
        borderColor: '#000',
        borderRadius: 60,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    betweenBorder: {
        borderColor: 'grey',
        borderWidth: .3,
        marginTop: 15,
        opacity: 0.3
    },
    lapList: {
        height: 250,
    },
});

export default Timer;