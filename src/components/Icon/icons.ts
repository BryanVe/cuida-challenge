import Facebook from './Facebook'
import Location from './Location'
import Menu from './Menu'
import Server from './Server'
import User from './User'
import Whatsapp from './Whatsapp'
import Youtube from './Youtube'

export const icons = {
	menu: Menu,
	facebook: Facebook,
	whatsapp: Whatsapp,
	youtube: Youtube,
	user: User,
	location: Location,
	server: Server
} as const
