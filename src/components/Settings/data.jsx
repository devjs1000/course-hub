import emailLogo from '../../images/svgs-for-forms/emailLogo.svg'
import phoneLogo from '../../images/svgs-for-forms/phoneLogo.svg'
import lockLogo from '../../images/svgs-for-forms/lockLogo.svg'
import nameLogo from '../../images/svgs-for-forms/name.svg'

export const data = [
	{
		label: "name",
		labelTitle: "Your name",
		img : nameLogo,
		type : 'text',
	},

	{
		label: "email",
		labelTitle: "Your email",
		img : emailLogo,
		type : 'email',
	},

	{
		label: "phone",
		labelTitle: "Your Phone Numer",
		img : phoneLogo,
		type : 'number',
	},

	{
		label: "password",
		labelTitle: "Your Password",
		img : lockLogo,
		type : 'password',
	}

]