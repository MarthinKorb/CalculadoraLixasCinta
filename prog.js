      function Limpar(){
                
                if(document.getElementById("comprimento").value == '' &&
                  document.getElementById('largura').value == '' &&
                  document.getElementById('preco').value ==  '' &&
                  document.getElementById('desconto').value == ''){
                    alert('Os campos esão vazios!');
                }              
                
                else{                
                
                document.getElementById("comprimento").value = ''; 
                document.getElementById('largura').value = '';
                document.getElementById('preco').value = '';
                document.getElementById('desconto').value = '';
                document.getElementById('ped_minimo').value = '';
                document.getElementById('preco_unit').value = '';
                document.getElementById('valor_desconto').value = '';
                document.getElementById('total_lixas').value = '';
                
                }
            }


            function TestarCampos(){
                    
            }
             
			function calcular(){				
                
                 if(document.getElementById("comprimento").value == '' ||
                    document.getElementById('largura').value == '' ||
                    document.getElementById('preco').value ==  '' ){
                        alert('Todos os campos devem ser preenchidos!');
                } else{
                    
                var comprimento = document.getElementById('comprimento').value;
				
				var largura = document.getElementById('largura').value;
                
                var preco = document.getElementById('preco').value;
                
                var desconto = document.getElementById('desconto').value; 
                
                
				//forçando o tipo de variável
				comprimento = parseFloat(comprimento);
				largura = parseFloat(largura);
                preco = parseFloat(preco);
                ped_minimo = parseInt(ped_minimo);
                valor_desconto = parseFloat(valor_desconto);
				
				if(comprimento == '' || comprimento == null || comprimento <= 0){
					alert('Favor digitar um número válido para comprimento da lixa ');
                    document.getElementById('comprimento').value = '';
                    document.getElementById('comprimento').focus();
					return false;
				}
				
				if(largura == '' || largura == null || largura <= 0){
					alert('Favor digitar um número válido para a largura da lixa.');
                    document.getElementById('largura').value = '';
                    document.getElementById('largura').focus();
					return false;
				}
                
                if(preco == '' || preco == null || preco <= 0){
                    alert('Favor digitar um valor válido para o preço da lixa');
                    document.getElementById('preco').value = '';
                    document.getElementById('preco').focus();
					return false;
                }
                                                 
                if(desconto < 0){
                    alert('Favor digitar um valor válido para o desconto (desconto)');
                    document.getElementById('desconto').value = '';
                    document.getElementById('desconto').focus();
					return false;
                }
                
               
                              
                
				//Iniciando a variável resultado
				var total_lixas = null;
                 
                //calculando o número mínimo de peças peças para o pedido
                var ped_minimo = (300 / largura);  
                
                //Arredondando para baixo a quantidade mínima para o pedido    
                ped_minimo = Math.floor(ped_minimo);  
                    
                //Mostrando na tela o pedido mínimo
                document.getElementById("ped_minimo").value = ped_minimo.toFixed(0).concat(' peças');                
                
                //calculando o valor das lixas
                preco_unit = (preco * (comprimento * 0.001));                            
                preco_unit = preco_unit + preco_unit * (0.1);
                    
                //Calculando o preço unitário das lixas
                preco_unit = preco_unit / Math.round(ped_minimo);
                
                //Atribuindo o Valor total das lixas conforme número de peças mínimas
                total_lixas = preco_unit * ped_minimo;               
                
                preco_unit = parseFloat(preco_unit.toFixed(2));
                
                //Exibindo o valor unitário das Lixas
                document.getElementById('preco_unit').value = 'R$ ' .concat(preco_unit);
                
                
                if(desconto == '' || desconto == 0){
                    desconto = 0;
                    valor_desconto = preco_unit;
                    document.getElementById('desconto').value = '';
                }else{
                        if(desconto > 12){                          
                            alert('Você não está autorizado a dar '+ desconto +
                                 '% de desconto');
                             desconto = 0;
                            document.getElementById('desconto').value = '';
                           }
                    valor_desconto = preco_unit * ( 1 - (desconto / 100));
                }   
                
                valor_desconto = parseFloat(valor_desconto.toFixed(2));
                document.getElementById('valor_desconto').value = 'R$ '.concat(valor_desconto);
                    
                if(desconto > 0){
                   total_lixas = valor_desconto * ped_minimo;
                    total_lixas = parseFloat(total_lixas.toFixed(2));
                    document.getElementById('total_lixas').value = 'R$ '.concat(total_lixas.toFixed(2));
                   }else{                    
                    
                //Exibindo o valor total das lixas conforme número de peças mínimas
                total_lixas = parseFloat(total_lixas.toFixed(2));
                document.getElementById('total_lixas').value = 'R$ '.concat(total_lixas);
            }
                    
        }
    }
            

