import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';



export default function App() {
	
	function somar() {
	  let r = 5 + 5;
  	}
	
	return (
    	<View style={styles.body}>

        	<View style={styles.header}>
		    	<Text style={styles.titulo}>CALCULADORA IMC</Text>
			</View>
			
			<Image
				style={styles.imagem}
				source={require('./assets/imc.png')}
				//uri: 'https://reactnative.dev/img/tiny_logo.png',
			/>
			
			<View style={styles.inputBox} >
				
				<Text style={styles.label}>Peso: </Text>
				
				<TextInput
					style={styles.input}
				/>
				
				<Text style={styles.label} >Altura: </Text>
					  
				<TextInput
					style={styles.input}
				/>
			</View>
			
			
			<View style={styles.bloco}>
				<TouchableOpacity style={styles.btn}>
					<Text style={styles.btnTxt}>Enviar :) </Text>
				</TouchableOpacity>
				
				<TouchableOpacity style={styles.btn}>
					<Text style={styles.btnTxt}>Enviar</Text>
				</TouchableOpacity>
			</View>
	
    	</View>
  	);
}

const styles = StyleSheet.create({

    body: {
		width: '100vw',
		backgroundColor:'#007fff',
	},

	header:{
		height: '10%',
		textAlign: 'center',
		justifyContent: 'center',
		backgroundColor: 'yellow'
	},
	
	titulo:{
		textAlign: 'center',
		fontSize: '1rem',
		color: 'red',
		fontWeight: 'bold',
	},
	
	//blocoImagem:{},
	
	imagem:{
		width: 100,
		height: 100,
		margin: 'auto',
		marginTop: '1rem',
	},
	
	bloco1:{
		width: 100,
		height: 100,
		margin: 'auto',
		marginTop: '1rem',
		backgroundColor: 'yellow'
	},
	
	inputBox:{
		width: '100vw',
		margin: 'auto',
		backgroundColor: 'yellow'
	},
	
	input:{
		width: '80%',
		margin: 'auto',
		marginBottom: '1rem',
		border: '1px solid red',
		backgroundColor: '#fff',
	},
	
	label:{
		marginTop: '1rem',
	},
	
	btn:{
		backgroundColor: '#ffa500',
		width:'40%',
		height: 40,
		
	},
	
	btnTxt:{
		marginTop: '1rem'
	},
	
});


//echo "# Reactec" >> README.md
//git init
//git add README.md
//git commit -m "first commit"
//git branch -M main
//git remote add origin https://github.com/Marcolino07/Reactec.git
//git push -u origin main

//add novo repos depois de criado
//git remote add origin https://github.com/Marcolino07/Reactec.git

//add todos os arquivos no commit
//git add .


//verifica o status dos arq a serem commitados
//git status

//
//git commit -m "comentario do commit"

//empurrar o codigo no repos
//git push ou
//git push -u origin master