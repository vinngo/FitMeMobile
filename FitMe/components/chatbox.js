import {StyleSheet, View, TextInput, Button, Text, FlatList, Stylesheet} from 'react-native'

const messages = [
    {
        sender: 'You',
        message: 'How do I do a push up?'
    },
    {
        sender: 'Coach',
        message: '...'
    }
]

export default function ChatBox() {
    const renderMessage = ({ item }) => (
        <View style={{ padding: 10, backgroundColor: '#f0f0f0', marginVertical: 5 }}>
            <Text style={{ fontWeight: 'bold' }}>{item.sender}</Text>
            <Text>{item.message}</Text>
        </View>
    );
    return(
        <View style = {styles.container}>
            <FlatList
                data = {messages}
                renderItem={renderMessage}
                style = {styles.list}
                >    
            </FlatList>
            <View style = {styles.messageContainer}>
                <TextInput/>
                <Button title = "Send"></Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    },

    list: {
        borderColor: 'black',
        borderWidth: 1,
        height: 600,
        flexGrow: 0
    },

    messageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        width: 300
    },

});