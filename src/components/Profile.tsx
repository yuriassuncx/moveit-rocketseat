import { useContext } from "react"
import { ChallengesContext } from "../contexts/ChallengesContext"
import styles from "../styles/components/Profile.module.css"

export function Profile() {
    const { level } = useContext(ChallengesContext)

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/yuriassuncx.png" alt="Imagem do Usuário" />
            <div>
                <strong>Yuri Assunção</strong>
                <p>
                    <img src="icons/level.svg" alt="ícone de Level Up" />
                    Level {level}
                </p>
            </div>
        </div>
    )
}