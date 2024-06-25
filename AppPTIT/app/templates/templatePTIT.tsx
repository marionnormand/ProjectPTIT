import { StyleSheet, Image } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export function TemplatePTIT() {
    return (
        <ThemedView style={styles.titleContainer}>
            <Image
                source={require('@/assets/images/logo_vietnam.png')}
                style={styles.flag_viet}
            />
            <Image
                source={require('@/assets/images/ptit-logo.png')}
                style={styles.ptit}
            />
        </ThemedView>
    );
};

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 8,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    flag_viet: {
        width: 76,
        height: 65,
        //resizeMode: 'contain',
    },
    ptit: {
        width: 90,
        height: 71,
        //resizeMode: 'contain',
    },
});
