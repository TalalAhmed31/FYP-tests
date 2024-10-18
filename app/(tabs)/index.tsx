// import { View, Image, ScrollView, Text, TextInput } from 'react-native'
// import React from 'react'

// const App = () => {
//   return (
//     <ScrollView>
//       <Text>Some Text</Text>
//       <View>
//       <Text>Some More Text</Text>
//       <Image source={{
//         uri:'https://reactnative.dev/docs/assets/p_cat2.png',
//       }}
//       style={{width:200, height:200,}}
//       />
//       </View>

//       <TextInput
//        style={{height:40,
//         borderColor: "gray",
//         borderWidth: 1,
//        }}
//        defaultValue='Enter Name Here'
//        />
//     </ScrollView>
//   )
// }

// export default App



// /PROPS/ 
// import { View, Text, TextInput } from 'react-native'
// import React from 'react'

// const Cat = props => {
//   return(
//     <Text> This is {props.name} component</Text>
//   )
// }

// const Cafe = () => {
//   return(
//     <View>
//       <Text>This is another text</Text>
//       <Cat name="dogs" />
//       <Cat name="tiger" />
//     </View>
//   )
// }

// export default Cafe

// STATE MANAGEMENT
// import { View, Text, Button, } from 'react-native'
// import React, {useState} from 'react'

// const Cat = props => {
//   const [isHungry, setIsHungry] = useState(true);

//   return (
//     <View>
//       <Text>I am {props.name}, and I am { isHungry ? 'hungry' : 'full'}! </Text>

//       <Button 
//       onPress={() => {
//         setIsHungry(false);
//       }}
//       disabled={!isHungry}
//       title={isHungry ? 'Give me some food please' : 'Thankyou'}
//       />
//     </View>
//   )
// }

// const Cafe = () => {
//   return(
//     <>
//     <Cat name = "Monty" />
//     <Cat name = "Other name" />
//     </>
//   )
// }

// export default Cafe



// import { View, Text, TextInput, TouchableOpacity } from 'react-native'
// import Checkbox from 'expo-checkbox'
// import React, { useState } from 'react'




// const App = () => {

//   const [userName, setUserName] = useState("")
//   const [password, setPassword] = useState("")
//   const [agree, setAgree] = useState(false);

//   return (
//     <View style={{
//       display: "flex",
//       padding: 20
//     }}>
//       <Text>Login Form</Text>
//       <Text> You can reach out to us anytime via info@optrevol.com</Text>

//       <View>
//         <Text style={{
//           color: "white"
//         }}>Enter Your Name</Text>
//         <TextInput
//           style={{
//             borderWidth: 1,
//             borderColor: 'white',
//             borderRadius: 20,
//             color: "white",
//             padding: 10
//           }}
//           value= {userName}
//           onChangeText={ (actualData)=> setUserName(actualData)}
//           autoCapitalize='none'
//           autoCorrect={false}
//         />

//         <Text style={{ color: 'white' }}>Enter Your Password</Text>
//         <TextInput
//           style={{
//             borderWidth: 1,
//             borderColor: 'white',
//             borderRadius: 20,
//             color: "white",
//             padding: 10
//           }}
//           autoCapitalize='none'
//           autoCorrect={false}
//           secureTextEntry={true}
//           value= {password}
//           onChangeText={ (actualData)=> setPassword(actualData)}
//         />
//       </View>

//       <View>
//         <Checkbox
//         value={ agree }
//         onValueChange={ ()=> setAgree(!agree) }
//         />
//         <Text style={{ color: 'white' }}> Agree with Terms and Conditions</Text>
//       </View>
//       <TouchableOpacity style={{
//         backgroundColor: agree ? 'blue' : 'grey',
//         width: 200,
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         padding: 10,
//         alignSelf: 'center'

//       }}
//       disabled={!agree}>
//         <Text style={{ color: 'white' }}>Hello</Text>
//       </TouchableOpacity>
//     </View>
//   )
// }

// export default App

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={{
      padding: 60,
    }}>
      <Text style={{ color: "white" }}>App</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})