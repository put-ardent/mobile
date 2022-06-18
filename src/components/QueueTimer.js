import React, {useEffect} from 'react';
import {StyleSheet, Text} from 'react-native';
import Colors from '../constants/Colors';
import CustomButton from './CustomButton';
import {useDispatch, useSelector} from 'react-redux';
import {
  acceptQueue,
  declineQueue,
  onJoinedLobby,
  stopQueue,
} from '../actions/queue';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

const QueueTimer = ({desktopHost}): Node => {
  const dispatch = useDispatch();
  const {queue} = useSelector(state => state);
  const {timer, acceptTimer, queueFound, estimatedTime, playerResponse, state} =
    queue;
  const time = new Date(timer * 1000).toISOString().substring(14, 19);
  const estimated = new Date(estimatedTime * 1000)
    .toISOString()
    .substring(14, 19);

  useEffect(() => {
    if (state === 'PartyNotReady') {
      dispatch(stopQueue(desktopHost));
    }
  }, [dispatch, state, desktopHost]);

  useEffect(() => {
    if (state === 'EveryoneReady') {
      dispatch(onJoinedLobby());
    }
  }, [dispatch, state, desktopHost]);
  return (
    <>
      {queueFound ? (
        <>
          <AnimatedCircularProgress
            style={styles.countdown}
            size={120}
            width={15}
            prefill={100}
            rotation={0}
            fill={100 - (acceptTimer / 12) * 100}
            tintColor="#00e0ff"
            backgroundColor="#3d5875">
            {() => (
              <Text style={styles.timer}>
                {12 - acceptTimer > 0 ? 12 - acceptTimer : 0}
              </Text>
            )}
          </AnimatedCircularProgress>
          {playerResponse === 'None' ? (
            <>
              <CustomButton
                title={'Accept'}
                onPress={() => dispatch(acceptQueue(desktopHost))}
              />
              <CustomButton
                title={'Decline'}
                onPress={() => dispatch(declineQueue(desktopHost))}
              />
            </>
          ) : (
            <Text style={styles.text}>{playerResponse}</Text>
          )}
        </>
      ) : (
        <>
          <Text style={styles.timer}>{time}</Text>
          <Text style={styles.text}>Estimated: {estimated}</Text>
          <CustomButton
            title={'Stop queue'}
            onPress={() => dispatch(stopQueue(desktopHost))}
          />
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  timer: {
    marginTop: 10,
    fontSize: 35,
    color: Colors.text,
    alignSelf: 'center',
  },
  text: {
    marginTop: 10,
    fontSize: 20,
    color: Colors.text,
    alignSelf: 'center',
  },
  countdown: {
    alignSelf: 'center',
  },
});

export default QueueTimer;
