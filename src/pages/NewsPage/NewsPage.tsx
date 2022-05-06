import {observer} from 'mobx-react-lite'
import {FC} from 'react'
import {Posts} from '../../components'
import {PostCategoryEnum} from '../../types'

export const NewsPage: FC = observer(() => {
	return (
		<Posts category={PostCategoryEnum.NEWS}/>
	)
})
