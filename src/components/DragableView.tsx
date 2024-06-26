import React from 'react';
import { TextStyle } from 'react-native';
import {
    GestureHandlerRootView,
    PanGestureHandler,
    PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from 'react-native-reanimated';

type CustomViewProps = {
    children: React.ReactNode;
    style?: TextStyle | TextStyle[];
};

type ContextType = {
    x: number;
    y: number;
};

const DragableView: React.FC<CustomViewProps> = ({ children, style }) => {
    const x = useSharedValue(0);
    const y = useSharedValue(0);
    const panGestureEvent = useAnimatedGestureHandler<
        PanGestureHandlerGestureEvent,
        ContextType
    >({
        onStart: (_, context) => {
            context.x = x.value;
            context.y = y.value;
        },
        onActive: (event, context) => {
            x.value = event.translationX + context.x;
            y.value = event.translationY + context.y;
        },
        // onEnd: () => {
        //     x.value = withSpring(0);
        //     y.value = withSpring(0);
        // },
    });
    const panStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: x.value,
                },
                {
                    translateY: y.value,
                },
            ],
        };
    }, [x, y]);

    return (
        <PanGestureHandler onGestureEvent={panGestureEvent}>
            <Animated.View
                style={[
                    { display: 'flex', justifyContent: 'center', alignItems: 'center' },
                    panStyle,
                    { ...style },
                ]}>
                {children}
            </Animated.View>
        </PanGestureHandler>
    );
};

export { DragableView };