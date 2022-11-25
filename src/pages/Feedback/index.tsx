import { useUser } from "../../Hooks/useUser";
import { ContainerWrapper, Globe } from "./styles";



export  default  function  Feedback ()   {

         

        const {user} = useUser();



        return (
            <>
                <ContainerWrapper>
                    <Globe />

                    <div className="card">
                        <div className="card-content">
                            <div className="sphere">
                                
                                <h3>
                                    {user.firstName.charAt(0)}
                                    { user.lastName.charAt(0)}
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
                            
                            
                            }</p>
                        </div>
                    </div>
                </ContainerWrapper>
            </>
        );
    }


