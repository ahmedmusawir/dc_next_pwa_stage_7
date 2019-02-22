import React from 'react';
import PropTypes from 'prop-types';
import { Layout, PageContainer } from 'components/layout';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import {
	H1,
	H2,
	H3,
	H4,
	H5,
	H6,
	A,
	P,
	Div,
	Img,
	Video,
	Section,
	Block,
	Paragraph,
	Form,
	FormGroup,
	Button,
	Input,
	SectionBackground,
} from 'components/general';
import { Link, withNamespaces } from 'i18n';

class HomePage extends React.Component {
	static async getInitialProps() {
		return {
			namespacesRequired: ['home-page'],
		};
	}

	render() {
		const { t } = this.props;

		return (
			<Layout
				title="Deep Cast - HomePage"
				description="Artificial intelligence is changing how business works, but most companies don’t know how to make AI work for them. But here at Deep Cast, we do."
			>
				{/* HOME HERO SECTION */}
				<SectionBackground bgImgLink="/static/images/_home/home-hero-1600.jpg">
					<PageContainer>
						<Section height="lg" className="home-hero">
							<Block flexBasis="40" className="hero-block-1">
								<Paragraph>
									<Fade>
										<H1 light fontWeight="800">
											{t('hero-title')}
										</H1>
										<H6 light>{t('hero-subtitle')}</H6>
									</Fade>
								</Paragraph>
							</Block>
							<Block flexBasis="60" className="hero-block-2">
								{/* <Img
									src="/static/images/oil-rig.png"
									alt=""
									className="img-fluid"
								/> */}
							</Block>
						</Section>
					</PageContainer>
				</SectionBackground>

				{/* VIDEO SECTION */}
				<SectionBackground className="section-container">
					<Section gridStart="1300px" className="home-video-section">
						<Block flexBasis="40" className="home-video-text-block">
							<Paragraph padding="3rem" className="pt-5 pb-5">
								<Fade>
									<H4 fontWeight="600">
										Simplify and Automate Through Innovations in Physics and AI
									</H4>
									<H6>
										To help the industrial sector thrive through the application
										of data-driven processes and cutting-edge AI application of
										data-driven processes and cutting-edge AI technologies.
									</H6>
									<H6>
										To help the industrial sector thrive through the application
										of data-driven processes and cutting-edge AI application of
										data-driven processes and cutting-edge AI technologies.
									</H6>
								</Fade>
							</Paragraph>
						</Block>
						<Block flexBasis="60" className="pt-5 pb-5 home-video-block">
							<Block>
								{/* <Video type="" youtubeId="XeEYaX82jSE" /> */}
								<Video type="youtube" youtubeId="XeEYaX82jSE" />
								{/* <Video
									type="html5"
									mp4Src="/static/videos/ai-vid.mp4"
									webmSrc=""
									posterSrc="/static/images/_home/home-video-cover.jpg"
								/> */}
							</Block>
						</Block>
					</Section>
				</SectionBackground>

				{/* TRIPLE BLUE BOX SECTION */}
				<SectionBackground
					bgColor="light"
					className="pt-5 pb-5 section-container"
				>
					<PageContainer>
						<Section gridStart="1207px" className="triple-blue-box-section">
							<Block flexBasis="70" className="text-center" align="flex-end">
								<Paragraph>
									<H4 fontWeight="600">
										Message related to how the company works knowing there are
										two main scopes
									</H4>
								</Paragraph>
							</Block>
							<Block flexBasis="33" className="text-center">
								<Paragraph padding="0rem" bgColor="blue">
									<Fade>
										<Link prefetch href="/product/data-integration" passHref>
											<A className="page-link">
												<Div minHeight="10rem" className="title">
													<H4 light fontWeight="600" className="p-5">
														Data Integration
													</H4>
												</Div>

												<Div minHeight="18rem" className="description">
													<H6 light className="pl-5 pr-5 pb-5">
														Molestias dolores quia sit harum accusamus quaerat
														Molestias dolores quia sit harum accusamus quaerat
													</H6>
												</Div>

												<Div className="learn-more mx-auto">
													<H6 light>Learn More</H6>
												</Div>

												<Img
													src="/static/images/_general/triple-box-fig-1.jpg"
													alt=""
													className="img-fluid w-100"
												/>
											</A>
										</Link>
									</Fade>
								</Paragraph>
							</Block>
							<Block flexBasis="33" className="text-center">
								<Paragraph padding="0rem" bgColor="blue">
									<Fade>
										<Link prefetch href="/product/field-evaluation" passHref>
											<A className="page-link">
												<Div minHeight="10rem" className="title">
													<H4 light fontWeight="600" className="p-5">
														Field evaluation
													</H4>
												</Div>
												<Div minHeight="18rem" className="description">
													<H6 light className="pl-5 pr-5 pb-5">
														Molestias dolores quia sit harum accusamus quaerat
														Molestias dolores quia sit harum accusamus quaerat
														Molestias dolores quia sit harum accusamus quaerat
													</H6>
												</Div>

												<Div className="learn-more mx-auto">
													<H6 light>Learn More</H6>
												</Div>

												<Img
													src="/static/images/_general/triple-box-fig-3.jpg"
													alt=""
													className="img-fluid w-100"
												/>
											</A>
										</Link>
									</Fade>
								</Paragraph>
							</Block>
							<Block flexBasis="33" className="text-center">
								<Paragraph padding="0rem" bgColor="blue">
									<Fade>
										<Link prefetch href="/product/field-development" passHref>
											<A className="page-link">
												<Div minHeight="10rem" className="title">
													<H4 light fontWeight="600" className="p-5">
														Field development
													</H4>
												</Div>
												<Div minHeight="18rem" className="description">
													<H6 light className="pl-5 pr-5 pb-5">
														Molestias dolores quia sit harum accusamus quaerat
														Molestias dolores quia sit harum accusamus quaerat
													</H6>
												</Div>

												<Div className="learn-more mx-auto">
													<H6 light>Learn More</H6>
												</Div>

												<Img
													src="/static/images/_general/triple-box-fig-2.jpg"
													alt=""
													className="img-fluid w-100"
												/>
											</A>
										</Link>
									</Fade>
								</Paragraph>
							</Block>
						</Section>
					</PageContainer>
				</SectionBackground>

				{/* PARTNER LOGO SECTION */}
				<SectionBackground className="pb-5 section-container">
					<Section
						gridStart="300px"
						height="10rem"
						className="home-partners-section"
					>
						<Block flexBasis="100" className="headline-block">
							<Paragraph>
								<H4 fontWeight="800" className="text-center mt-5">
									We Strive for Cutting-Edge Solutions Through our Strategic
									High-Tech Partnerships
								</H4>
							</Paragraph>
						</Block>
					</Section>
					<Section
						gridStart="300px"
						height="10rem"
						className="pr-5 pl-5 home-partners-section"
					>
						<Block flexBasis="12" className="text-center">
							<Zoom>
								<A>
									<Img
										src="/static/images/partner-logo-1.jpg"
										alt="Partner Logo"
									/>
								</A>
							</Zoom>
						</Block>
						<Block flexBasis="12" className="text-center">
							<Zoom>
								<A>
									<Img
										src="/static/images/partner-logo-2.jpg"
										alt="Partner Logo"
									/>
								</A>
							</Zoom>
						</Block>
						<Block flexBasis="12" className="text-center">
							<Zoom>
								<A>
									<Img
										src="/static/images/partner-logo-3.jpg"
										alt="Partner Logo"
									/>
								</A>
							</Zoom>
						</Block>
						<Block flexBasis="12" className="text-center">
							<Zoom>
								<A>
									<Img
										src="/static/images/partner-logo-4.jpg"
										alt="Partner Logo"
									/>
								</A>
							</Zoom>
						</Block>
						<Block flexBasis="12" className="text-center">
							<Zoom>
								<A>
									<Img
										src="/static/images/partner-logo-5.jpg"
										alt="Partner Logo"
									/>
								</A>
							</Zoom>
						</Block>
						<Block flexBasis="12" className="text-center">
							<Zoom>
								<A>
									<Img
										src="/static/images/partner-logo-1.jpg"
										alt="Partner Logo"
									/>
								</A>
							</Zoom>
						</Block>
						<Block flexBasis="12" className="text-center">
							<Zoom>
								<A>
									<Img
										src="/static/images/partner-logo-2.jpg"
										alt="Partner Logo"
									/>
								</A>
							</Zoom>
						</Block>
						<Block flexBasis="12" className="text-center">
							<Zoom>
								<A>
									<Img
										src="/static/images/partner-logo-3.jpg"
										alt="Partner Logo"
									/>
								</A>
							</Zoom>
						</Block>
					</Section>
				</SectionBackground>

				{/* FORM SECTION */}
				<SectionBackground bgColor="" className="section-container">
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
HomePage.propTypes = {
	t: PropTypes.func.isRequired,
};

export default withNamespaces('home-page')(HomePage);
