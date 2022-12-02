import React, { useState, useEffect, useRef } from 'react'
import s from '../../styles/Shared.module.css'
import su from '../../styles/SignUp.module.css'
import { useReach, useAuth } from '../../hooks'
import { cf, request } from '../../utils'

const SignUp = () => {
	const { alertThis, user, checkForSignin } = useReach()
	const { signUp } = useAuth()
	const [[username, setUsername], [pfp, setPfp], [contract, setContract]] = [
		useState(''),
		useState(''),
		useState(''),
	]

	const handleInputChange = (e) => {
		const name = e.currentTarget.name
		const value = e.currentTarget.value
		if (name === 'pfp') setPfp(value)
		else if (name === 'username') setUsername(value)
		else if (name === 'contract') setContract(value)
	}

	const save = async (e) => {
		e.preventDefault()
		await signUp(username, user.address, pfp, contract)
	}

	return (
		<div className={cf(s.wMax, s.flex, s.flexCenter)}>
			<div className={cf(s.wMax, s.flex, s.flexCenter)}>
				<div className={cf(su.pfp)}></div>
			</div>
			<div className={cf(s.wMax, s.flex, s.flexCenter)}>
				<form
					className={cf(s.w900_50, s.w760_50, s.w480_100, s.w360_100)}
					onSubmit={(e) => {
						checkForSignin(() => {
							save(e)
						})
					}}
				>
					<label
						htmlFor='username'
						className={cf(s.wMax, s.flex, s.flexCenter, su.label)}
					>
						<span className={cf(s.wMax, s.dInlineBlock, s.tCenter)}>
							Username
						</span>
						<input
							className={cf(s.wMax, s.dInlineBlock, su.input)}
							id='username'
							name='username'
							onChange={handleInputChange}
						/>
					</label>
					<label
						htmlFor='pfp'
						className={cf(s.wMax, s.flex, s.flexCenter, su.label)}
					>
						<span className={cf(s.wMax, s.dInlineBlock, s.tCenter)}>
							NFT ID
						</span>
						<input
							className={cf(s.wMax, s.dInlineBlock, su.input)}
							placeholder='New PFP ID'
							id='pfp'
							name='pfp'
							onChange={handleInputChange}
						/>
					</label>
					<label
						htmlFor='contract'
						className={cf(s.wMax, s.flex, s.flexCenter, su.label)}
					>
						<span className={cf(s.wMax, s.dInlineBlock, s.tCenter)}>
							NFT Contract Address
						</span>
						<input
							className={cf(s.wMax, s.dInlineBlock, su.input)}
							placeholder='Contract Address'
							id='contract'
							name='contract'
							onChange={handleInputChange}
						/>
					</label>
				</form>
			</div>
		</div>
	)
}

export default SignUp
