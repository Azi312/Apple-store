import React from 'react'
import styles from './Form.module.scss'
import SignUp from './SignUp'
import SignIn from './SignIn'

const Form: React.FC = () => {
	const [active, setActive] = React.useState(false)

	return (
		<div className={styles.body}>
			<div className={styles.categories}>
				<h1 className={active && styles.active} onClick={() => setActive(true)}>
					Sing up
				</h1>
				<h1
					className={active === false && styles.active}
					onClick={() => setActive(false)}
				>
					Sing in
				</h1>
			</div>
			{active ? <SignUp /> : <SignIn />}
		</div>
	)
}

export default Form
