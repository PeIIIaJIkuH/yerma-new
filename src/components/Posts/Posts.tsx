import {Button, Grid, Group, LoadingOverlay} from '@mantine/core'
import {observer} from 'mobx-react-lite'
import {FC, useEffect} from 'react'
import {postsState} from '../../store'
import {PostCategoryEnum} from '../../types'
import {PostCard} from '../PostCard'

interface Props {
	category?: PostCategoryEnum
	query?: string | null
}

export const Posts: FC<Props> = observer(({category, query}) => {
	const fetchMore = async () => {
		await postsState.fetchPosts({category, name: query || undefined})
	}

	useEffect(() => {
		(async () => {
			await postsState.fetchPosts({category, name: query || undefined}, true)
		})()
	}, [category, query])

	return (
		<Grid p='md' sx={{position: 'relative', height: postsState.posts.length ? '' : '100%'}}>
			<LoadingOverlay visible={postsState.loading}/>
			{postsState.posts.map(({uuid, name, description, author, images}) => (
				<Grid.Col key={uuid}>
					<PostCard title={name} description={description} author={author}
						images={images.map(img => img.image)}
					/>
				</Grid.Col>
			))}
			{postsState.posts.length > 0 && postsState.hasMore && (
				<Grid.Col>
					<Group position='center' mt='md'>
						<Button onClick={fetchMore} loading={postsState.loading}>
							Загрузить ещё
						</Button>
					</Group>
				</Grid.Col>
			)}
		</Grid>
	)
})
