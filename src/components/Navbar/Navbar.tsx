import {Navbar as MantineNavbar, ScrollArea, useMantineTheme} from '@mantine/core'
import {useMediaQuery} from '@mantine/hooks'
import clsx from 'clsx'
import {FC} from 'react'
import {privateRoutes} from '../../routes'
import {ButtonLink} from '../ButtonLink'
import s from './Navbar.module.css'

interface Props {
	isOpen: boolean
	closeNavbar: () => void
}

export const Navbar: FC<Props> = ({isOpen, closeNavbar}) => {
	const theme = useMantineTheme()
	const isTablet = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`)

	return (
		<MantineNavbar hidden={!isOpen} className={clsx(isTablet && s.tabletNavbar)} hiddenBreakpoint='sm'
			width={{sm: 200}}
		>
			<MantineNavbar.Section grow component={ScrollArea}>
				<ButtonLink path={privateRoutes.almaMater.path} fullWidth callback={closeNavbar}>
					Alma Mater
				</ButtonLink>
				<ButtonLink path={privateRoutes.news.path} fullWidth callback={closeNavbar}>
					Новости ВГПУ
				</ButtonLink>
				<ButtonLink path={privateRoutes.essays.path} fullWidth callback={closeNavbar}>
					Эссе
				</ButtonLink>
				<ButtonLink path={privateRoutes.teachers.path} fullWidth callback={closeNavbar} disabled>
					Преподаватели
				</ButtonLink>
				<ButtonLink path={privateRoutes.alumni.path} fullWidth callback={closeNavbar} disabled>Выпускники
				</ButtonLink>
				<ButtonLink path={privateRoutes.career.path} fullWidth callback={closeNavbar}>
					Карьера
				</ButtonLink>
				<ButtonLink path={privateRoutes.education.path} fullWidth callback={closeNavbar}>
					Образование
				</ButtonLink>
				{isTablet && (
					<>
						<ButtonLink path={privateRoutes.leisure.path} fullWidth callback={closeNavbar}>
							Досуг
						</ButtonLink>
						<ButtonLink path={privateRoutes.tales.path} fullWidth callback={closeNavbar}>
							Студенческие байки
						</ButtonLink>
						<ButtonLink path={privateRoutes.gallery.path} fullWidth callback={closeNavbar}>
							Фото-видео-галерея
						</ButtonLink>
						<ButtonLink path={privateRoutes.muz.path} fullWidth callback={closeNavbar}>
							“9 Муз”
						</ButtonLink>
						<ButtonLink path={privateRoutes.calendar.path} fullWidth callback={closeNavbar}>
							Памятный календарь
						</ButtonLink>
						<ButtonLink path={privateRoutes.memory.path} fullWidth callback={closeNavbar}>
							Memory
						</ButtonLink>
					</>
				)}
			</MantineNavbar.Section>
		</MantineNavbar>
	)
}
