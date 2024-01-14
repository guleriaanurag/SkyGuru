import {Online,Offline} from 'react-detect-offline'
import offline from '../assets/offline.gif'

export default function CheckConnection({children}){
    return(
    <>
        <Online>{children}</Online>
        <Offline>
            <div>
                <img src={offline} alt="offline" />
                <h4>It seems you are Offline at the moment!</h4>
            </div>
        </Offline>
    </>
    );
}