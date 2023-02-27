import styles from './styles.module.scss'
import { useSession, sigIn } from 'next-auth/client'
import { api } from '../../services/api'
import { stripe } from '../../services/stripe'


interface SubscribeButtonProps {  
  priceId: string;
}

export function SubscribeButton({priceId}: SubscribeButtonProps) {
  const [session] = useSession()

  async function handleSubscribe() {
     if(!session) {
      sigIn('github')
      return
    }

    try {
      const response = await api.post('/subscribe')

      const { sessionId } = response.data

      
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
