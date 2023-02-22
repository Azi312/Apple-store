import { useForm } from 'react-hook-form'
import styles from './Form.module.scss'
import { BiError } from 'react-icons/bi'
import { FormTypes } from './formTypes'

const SignUp: React.FC = () => {
	const {
		register,
		formState: { errors, isValid },
		handleSubmit,
		reset,
	} = useForm<FormTypes>({
		mode: 'onBlur',
	})

	const onSubmit = (data: FormTypes) => {
		alert(JSON.stringify(data))
		reset()
	}

	return (
		<>
			<h2>Sign Up for Free</h2>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.names}>
					<div>
						<label>
							First name
							<input
								{...register('firstName', {
									required: 'First name is require filed',
									minLength: {
										value: 4,
										message: 'minimum 4 symbols',
									},
								})}
							/>
						</label>
						<div className={styles.error}>
							{errors?.firstName?.message && (
								<BiError style={{ fontSize: '18px' }} />
							)}
							{errors?.firstName?.message}
						</div>
					</div>
					<div>
						<label>
							Last name
							<input
								{...register('lastName', {
									required: 'Last name is require filed',
									minLength: {
										value: 4,
										message: 'minimum 4 symbols',
									},
								})}
							/>
						</label>
						<div className={styles.error}>
							{errors?.firstName?.message && (
								<BiError style={{ fontSize: '18px' }} />
							)}
							{errors?.firstName?.message}
						</div>
					</div>
				</div>
				<div className={styles.input}>
					<label>
						Email Address
						<input
							{...register('email', {
								required: 'Email is require filed',
								pattern: {
									value:
										/^((([0-9A-Za-z]{1}[-0-9A-z.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}.){1,2}[-A-Za-z]{2,})$/u,
									message: 'Please, enter valid email',
								},
							})}
						/>
					</label>
					<div className={styles.error}>
						{errors?.email?.message && <BiError style={{ fontSize: '18px' }} />}
						{errors?.email?.message}
					</div>
				</div>
				<div className={styles.input}>
					<label>
						Password
						<input
							{...register('password', {
								required: 'Password is require field',
								minLength: {
									value: 8,
									message: 'minimum 8 symbols',
								},
							})}
							type='password'
						/>
					</label>
					<div className={styles.error}>
						{errors?.password && errors?.password?.message && (
							<BiError style={{ fontSize: '18px' }} />
						)}
						{errors?.password && errors?.password?.message}
					</div>
				</div>
				{/* <div className={styles.item}>
					<label>
						<input type='checkbox' />
						Remember me
					</label>
					<h3>Forgot your password?</h3>
				</div> */}
				<input
					type='submit'
					value='Sign up'
					disabled={!isValid}
					style={
						!isValid
							? { backgroundColor: '#909eeb' }
							: { backgroundColor: '#403ec0' }
					}
				/>
			</form>
		</>
	)
}

export default SignUp
