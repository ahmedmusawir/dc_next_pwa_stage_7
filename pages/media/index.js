import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import {
	Layout,
	PageContainer,
	BlogTile,
	PageBackground,
	MediaWithPagination,
} from 'components/layout';
import {
	H1,
	H2,
	H3,
	H4,
	H5,
	H6,
	Img,
	Div,
	Form,
	FormGroup,
	Button,
	Input,
	Section,
	Block,
	Paragraph,
	Small,
	SectionBackground,
} from 'components/general';
import { Link, withNamespaces } from 'i18n';

class MediaPage extends React.Component {
	static async getInitialProps() {
		return {
			namespacesRequired: ['media-page'],
		};
	}

	constructor() {
		super();
		this.state = {
			posts: [
				{
					title: 'Post Title 1',
					date: 'Feb 20, 2019',
					image: 'https://picsum.photos/200/200/?image=0',
				},
				{
					title: 'Post Title 2',
					date: 'Feb 22, 2019',
					image: 'https://picsum.photos/200/200/?image=2',
				},
				{
					title: 'Post Title 3',
					date: 'Feb 23, 2019',
					image: 'https://picsum.photos/200/200/?image=3',
				},
				{
					title: 'Post Title 4',
					date: 'Feb 24, 2019',
					image: 'https://picsum.photos/200/200/?image=4',
				},
				{
					title: 'Post Title 5',
					date: 'Feb 25, 2019',
					image: 'https://picsum.photos/200/200/?image=5',
				},
				{
					title: 'Post Title 6',
					date: 'Feb 26, 2019',
					image: 'https://picsum.photos/200/200/?image=6',
				},
				{
					title: 'Post Title 7',
					date: 'Feb 27, 2019',
					image: 'https://picsum.photos/200/200/?image=7',
				},
				{
					title: 'Post Title 8',
					date: 'Feb 28, 2019',
					image: 'https://picsum.photos/200/200/?image=8',
				},
				{
					title: 'Post Title 9',
					date: 'Feb 29, 2019',
					image: 'https://picsum.photos/200/200/?image=9',
				},
				{
					title: 'Post Title 10',
					date: 'Feb 29, 2019',
					image: 'https://picsum.photos/200/200/?image=10',
				},
				{
					title: 'Post Title 11',
					date: 'Feb 29, 2019',
					image: 'https://picsum.photos/200/200/?image=11',
				},
				{
					title: 'Post Title 12',
					date: 'Feb 29, 2019',
					image: 'https://picsum.photos/200/200/?image=12',
				},
				{
					title: 'Post Title 1',
					date: 'Feb 20, 2019',
					image: 'https://picsum.photos/200/200/?image=0',
				},
				{
					title: 'Post Title 2',
					date: 'Feb 22, 2019',
					image: 'https://picsum.photos/200/200/?image=2',
				},
				{
					title: 'Post Title 3',
					date: 'Feb 23, 2019',
					image: 'https://picsum.photos/200/200/?image=3',
				},
				{
					title: 'Post Title 4',
					date: 'Feb 24, 2019',
					image: 'https://picsum.photos/200/200/?image=4',
				},
				{
					title: 'Post Title 5',
					date: 'Feb 25, 2019',
					image: 'https://picsum.photos/200/200/?image=5',
				},
				{
					title: 'Post Title 6',
					date: 'Feb 26, 2019',
					image: 'https://picsum.photos/200/200/?image=6',
				},
				{
					title: 'Post Title 7',
					date: 'Feb 27, 2019',
					image: 'https://picsum.photos/200/200/?image=7',
				},
				{
					title: 'Post Title 8',
					date: 'Feb 28, 2019',
					image: 'https://picsum.photos/200/200/?image=8',
				},
				{
					title: 'Post Title 9',
					date: 'Feb 29, 2019',
					image: 'https://picsum.photos/200/200/?image=9',
				},
				{
					title: 'Post Title 10',
					date: 'Feb 29, 2019',
					image: 'https://picsum.photos/200/200/?image=10',
				},
				{
					title: 'Post Title 11',
					date: 'Feb 29, 2019',
					image: 'https://picsum.photos/200/200/?image=11',
				},
				{
					title: 'Post Title 12',
					date: 'Feb 29, 2019',
					image: 'https://picsum.photos/200/200/?image=12',
				},
			],
		};
	}

	render() {
		const { t } = this.props;

		return (
			<Layout
				title="Deep Cast - Media Page"
				description="Artificial intelligence is changing how business works, but most companies don’t know how to make AI work for them. But here at Deep Cast, we do."
			>
				<SectionBackground
					bgColor="grey"
					className="pb-5 pt-5 section-container"
				>
					<PageContainer>
						<Section gridStart="" height="10rem" className="media-hero-section">
							<Block flexBasis="100" className="" justify="flex-start">
								<H1 fontWeight="500" className="mt-5 pt-5 pb-5">
									{/* Media */}
									{t('hero-title')}
								</H1>
							</Block>
						</Section>
						<MediaWithPagination
							posts={this.state.posts}
							currentPage={1}
							postsPerPage={8}
						/>
					</PageContainer>
				</SectionBackground>

				{/* FORM SECTION */}
				<SectionBackground className="section-container">
					<PageContainer>
						<Section gridStart="769px" className="general-subscription-section">
							<Block flexBasis="50">
								<Paragraph padding="0">
									<Fade bottom cascade>
										<H4 fontWeight="600">More to Come!</H4>
										<H6 className="pb-4">
											Sign up for our newsletter to get the latest product
											announcements
										</H6>
										<Form inline>
											<FormGroup className="mb-2 mr-sm-2 mb-sm-0">
												<Input
													type="email"
													name="email"
													id="email-input"
													placeholder="Your Email"
												/>
											</FormGroup>
											<Button color="info" className="submit-btn">
												Submit
											</Button>
										</Form>
									</Fade>
								</Paragraph>
							</Block>
							<Block flexBasis="50">
								<Paragraph className="text-center" padding="0">
									<Fade>
										<Img
											src="/static/images/_home/home-subscription-350x250.png"
											alt=""
											className="img-fluid"
										/>
									</Fade>
								</Paragraph>
							</Block>
						</Section>
					</PageContainer>
				</SectionBackground>
			</Layout>
		);
	}
}
MediaPage.propTypes = {
	t: PropTypes.func.isRequired,
};

export default withNamespaces('media-page')(MediaPage);
