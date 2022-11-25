import { useRouter } from "next/router";
import { stringify } from "querystring";
import { useEffect } from "react";
import { useUser } from "../../Hooks/useUser";
import { ContainerWrapper, Globe } from "./styles";



export  default  function  Feedback ()   {

   useEffect(() => {
     loadUser();
    }, []);

                     
    
    const {query} = useRouter();
    
    
    const {user, loadUserById} = useUser();


    let id = JSON.stringify(query.id)

    function loadUser() {
        
        loadUserById(id.replace(/"/g, '').toString());
      
    }




        return (
            <>
                <ContainerWrapper>
                    <Globe />

                    <div className="card">
                        <div className="card-content">
                            <div className="sphere">
                                
                                <h3>
                                    {
                                        
                                        user.firstName.split('')[0]


                                        
                                      
                                    }
                                    {
                                        user.lastName.split('')[0]
                                    }
                                        
                                    
                                   
                                </h3>
                            </div>
                            <h6>
                                Bem vindo {user.firstName} {user.lastName}
                            </h6>
                            <hr />
                            <p>Você nasceu dia {
                            
                            new Date(user.dateOfBirthday).toLocaleDateString('pt-BR', {
                                day: '2-digit',

                                // trazer mês por extenso
                                month: 'long',
                                year: 'numeric'
                            })
                            
                            
                            }
                            </p>
                        </div>
                    </div>
                </ContainerWrapper>
            </>
        );
    }


