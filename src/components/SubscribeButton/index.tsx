import styles from './styles.module.scss'
import { useSession, sigIn } from 'next-auth/client'
interface SubscribeButtonProps {  
  priceId: string;
}

export function SubscribeButton({priceId}: SubscribeButtonProps) {
  const [session] = useSession()

  function handleSubscribe() {
     if(!session) {
      sigIn('github')
      return
     }

     
  } 
  
  return (
        <button
          type="button"
          className={styles.subscribeButton}
          onClick={handleSubscribe}
        >
          Subscribe now
        </button>
    )
}
