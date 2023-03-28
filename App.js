import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
{/*usando hook state para armazenar nome para ser exibido*/}
  const [nome, setNome] = useState("");
  const [nomeTxt, setNomeTxt] = useState("");
	
	{/*usando hook state para armazenar nome digitado e linkado com TextInput*/}
  const [valor1, setValor1] = useState();
  const [valor2, setValor2] = useState();
  const [resultado, setResultado] = useState();

	{/*usando hook state para armazenar nome digitado e linkado com TextInp*/}
  function somar() {
	  let r = parseFloat(valor1) + parseFloat(valor2);
	  setResultado(r)
  }
	
  function sub() {
	  let r = parseFloat(valor1) - parseFloat(valor2);
	  setResultado(r)
  }
	
  function mult() {
	  let r = parseFloat(valor1) * parseFloat(valor2);
	  setResultado(r)
  }
	
  function div() {
	  let r = parseFloat(valor1) / parseFloat(valor2);
	  setResultado(r)
  }

  function lerNome(){
	  setNome(nomeTxt);
  }

  return (
    <View style={styles.body}>
      
		<Text style={styles.titulo}>TITULO PRINCIPAL</Text>

		  <View style={styles.bloco}>
			  <Text style={styles.label}>Nome: </Text>
			  <TextInput
				  style={styles.input}
				  value={nomeTxt}
				  onChangeText={(texto)=>setNomeTxt(texto)}
			  />
		  </View>
		  
		  <text style={styles.nomeado}> Nome: {nome} </text>
		  
		  <TouchableOpacity style={styles.btnCenter} onPress={lerNome}>
		    <Text style={styles.btnTxt}>Enviar</Text>
		  </TouchableOpacity>
		  
		  <View style={styles.bloco}>
		    <Text style={styles.label}> Valor 1: </Text>
			  <TextInput
			    style={styles.input}
				value={valor1}
				placeholder={'Insira um valor'}
				onChangeText={(valor)=>setValor1(valor)}
			  />
		  </View>
		  
	      <View style={styles.bloco}>
		    <Text style={styles.label}> Valor 2: </Text>
			  <TextInput 
			    style={styles.input}
				value={valor2}
				placeholder={'Insira mais um valor'}
				onChangeText={(valor)=>setValor2(valor)}
			  />
		  </View>
		  
		  <view style={styles.caixa}>
			  <TouchableOpacity style={styles.btnMath} onPress={somar}>
				<Text style={styles.txtBotao}>Somar</Text>
			  </TouchableOpacity>

					  <TouchableOpacity style={styles.btnMath} onPress={sub}>
				<Text style={styles.txtBotao}>Subtrair</Text>
			  </TouchableOpacity>

					  <TouchableOpacity style={styles.btnMath} onPress={mult}>
				<Text style={styles.txtBotao}>Multiply</Text>
			  </TouchableOpacity>

					  <TouchableOpacity style={styles.btnMath} onPress={div}>
				<Text style={styles.txtBotao}>Dividir</Text>
			  </TouchableOpacity>
		</view>
		
		  <View style={styles.bloco}>
		    <Text style={styles.label}> Resultado: </Text>
			  <TextInput 
			    style={styles.input}
				value={resultado}
			  />
		  </View>
    </View>
  );
}

const styles = StyleSheet.create({

    body: {
		width: '100vw',
		heigth: '100vh',
		backgroundColor: '#808080',
	},

	titulo:{
		marginTop: '1rem',
		textAlign: 'center',
		fontSize: 30,
		color: 'red'
	},

	label:{
	  	fontSize:30,
		color: 'blue',
		width: '50vw',
	},
	
    btnCenter:{
		width: '50vw',
		margin: 'auto',
		marginTop: 20,
		alignItems:'center',
		borderRadius: 6.3,
		backgroundColor:'#007fff',
    },
	
	nomeado:{
	  fontSize: 30,
		color: '#fff',
		width: '50vw',
	},
	
    btnTxt:{
	   color:"#FFF",
	   fontSize:30,
     },
	input:{
		borderWidth:2,
		fontSize:20	,
		color: '#fff',
	},
	
	caixa:{
		display: 'flex',
		flexWrap: 'wrap',
		width: '100%',
		justifyContent: 'space-between',
		backgroundColor: 'white',
	},
	
	btnMath:{
		marginTop: 20,
		width: 110,
		display: 'flex',
		borderRadius: 9.3,
		alignItems:'center',
		backgroundColor:'#007fff',
	}
});