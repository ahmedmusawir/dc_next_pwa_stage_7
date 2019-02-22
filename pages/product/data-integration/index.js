import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import {
	Layout,
	HeaderTooltipBox,
	PageContainer,
	ContentSlider,
} from 'components/layout';
import {
	H1,
	H2,
	H3,
	H4,
	H5,
	H6,
	P,
	Img,
	Button,
	Card,
	Section,
	Block,
	Paragraph,
	Form,
	FormGroup,
	Input,
	Chart,
	SectionBackground,
} from 'components/general';
import { Link, withNamespaces } from 'i18n';

class DataIntegrationPage extends Component {
	static async getInitialProps() {
		return {
			namespacesRequired: ['data-integration-page'],
		};
	}

	render() {
		const { t } = this.props;

		return (
			<Layout
				title="Deep Cast - Data Integration"
				description="Artificial intelligence is changing how business works, but most companies don’t know how to make AI work for them. But here at Deep Cast, we do."
			>
				{/* TOP HERO SECTION */}
				<SectionBackground bgImgLink="/static/images/_data-integration/data-integration-header.jpg">
					<PageContainer>
						<Section height="lg" className="product-hero">
							<Block flexBasis="50" className="hero-block-1">
								<Paragraph>
									<Fade>
										<H1 light fontWeight="600">
											{t('hero-title')}
										</H1>
										<H6 light>{t('hero-subtitle')}</H6>
									</Fade>
								</Paragraph>
							</Block>
						</Section>
					</PageContainer>
				</SectionBackground>

				{/* BLUE BOX SECTION */}
				<SectionBackground className="pb-5 pt-5 section-container">
					<PageContainer>
						<Section
							gridStart="550px"
							className="blue-box-section"
							justify="flex-start"
						>
							<Block
								flexBasis="90"
								className="bg-block"
								justify="flex-end"
								bgImgLink="https://picsum.photos/1200/500/?image=5"
							>
								<Paragraph
									padding="4rem"
									margin="0"
									className="bluebox"
									bgColor="blue"
								>
									<Fade>
										<H4 light fontWeight="600" grey className="title">
											Problem with <br /> organizing data
										</H4>
										<H6 light>
											This is some short description that explains whta the
											product does. This is some short description that explains
											product does. This is some short description that explains
											whta the product does
										</H6>
										<Img
											src="https://picsum.photos/1200/500/?image=5"
											alt=""
											className="img-fluid w-100"
										/>
									</Fade>
								</Paragraph>
							</Block>
						</Section>
					</PageContainer>
				</SectionBackground>

				{/* CLEAN DATA SECTION */}
				<SectionBackground className="section-container pb-5 pt-5" bgColor="">
					<PageContainer>
						<Section
							gridStart="1300px"
							bgImgLink="/static/images/_data-integration/data-integ-clean-data-bg.jpg"
							height="lg"
							className="data-int-clean-data-section"
						>
							<Block flexBasis="40" align="flex-start">
								<Paragraph padding="3rem" className="text-box">
									<Fade>
										<H3 fontWeight="600">Clean and organize valuable data</H3>
										<H5 grey>
											Lorem ipsum dolor, sit amet consectetur adipisicing elit.
											Lorem ipsum dolor, sit amet consectetur adipisicing elit.
											repudiandae.
										</H5>
									</Fade>
								</Paragraph>
							</Block>
							<Block flexBasis="60">
								<Paragraph className="text-center">
									{/* JUST SHOWING BG IMAGE */}
								</Paragraph>
							</Block>
						</Section>
					</PageContainer>
				</SectionBackground>

				{/* QUICK MIGRATE SECTION - Img LEFT */}
				<SectionBackground className="pt-5 pb-5 section-container">
					<PageContainer>
						<Section gridStart="1250px">
							<Block flexBasis="50">
								<Fade>
									<Img
										src="/static/images/_data-integration/data-integ-quick-migrate.jpg"
										alt="Deep Cast"
										className="img-fluid"
									/>
								</Fade>
							</Block>
							<Block flexBasis="50">
								<Paragraph>
									<Fade>
										<H4 fontWeight="600" className="pb-4">
											Quickly migrate your old data into one place for all your
											tools
										</H4>
										<H6 grey>
											Lorem ipsum dolor, sit amet consectetur adipisicing elit.
											Molestias dolores quia sit harum accusamus quaerat
											repudiandae. Lorem ipsum dolor, sit amet consectetur
											adipisicing elit. Molestias dolores quia sit harum
											accusamus quaerat repudiandae.
										</H6>
										<H6 grey>
											Lorem ipsum dolor, sit amet consectetur adipisicing elit.
											Molestias dolores quia sit harum accusamus quaerat
										</H6>
									</Fade>
								</Paragraph>
							</Block>
						</Section>
					</PageContainer>
				</SectionBackground>

				{/* BORDER BOX SECTION */}
				<SectionBackground className="pb-5 pt-5 section-container">
					<PageContainer className="content-container">
						<Section
							gridStart="1200px"
							className="border-box-section-reverse"
							justify="flex-start"
						>
							<Block flexBasis="50" className="txt-block">
								<Paragraph padding="3rem" className="pt-5 pb-5 text-box">
									<Fade>
										<H4 fontWeight="600">How the product works</H4>
										<H6 grey>
											This is some short description that explains whta the
											product does. This is some short description that explains
											whta the product does
										</H6>
										<H6 grey>
											This is some short description that explains whta the
											product does.
										</H6>
									</Fade>
								</Paragraph>
							</Block>
							<Block flexBasis="40" className="img-block">
								<Img
									src="https://picsum.photos/400/250/?image=5"
									alt="deepcast"
									className=""
								/>
							</Block>
						</Section>
					</PageContainer>
				</SectionBackground>

				{/* CONTENT SLIDER SECTION */}
				<SectionBackground className="section-container" bgColor="light">
					<Section gridStart="1200px">
						<Block
							flexBasis="50"
							bgImgLink="/static/images/_data-integration/data-integ-slider-800x500.jpg"
							className=""
						>
							<Img
								src="/static/images/_data-integration/data-integ-slider-800x500.jpg"
								alt="deepcast"
								className="img-fluid w-100 d-xl-none"
							/>
						</Block>
						<Block flexBasis="50">
							<Paragraph>
								<ContentSlider />
							</Paragraph>
						</Block>
					</Section>
				</SectionBackground>

				{/* FORM SECTION */}
				<SectionBackground className="more-info-form-section section-container">
					<PageContainer>
						<Section gridStart="767px">
							<Block flexBasis="50">
								<Paragraph padding="0">
									<Fade bottom cascade>
										<H4 fontWeight="600">For more information</H4>
										<H6 className="pb-4">
											Sign up for our newsletter to get the latest product
											announcements to get the latest product
										</H6>
										<Form>
											<FormGroup>
												<Input
													type="textarea"
													name="textarea"
													id="textarea-input"
													placeholder="Tell us what you want to know"
													className="form-control textarea-input"
													row="10"
												/>
											</FormGroup>
											<br />
											<FormGroup className="">
												<Input
													type="email"
													name="email"
													id="email-input"
													placeholder="Your Email"
													className="email-input"
												/>
											</FormGroup>
											<Button color="info" className="submit-btn ">
												Submit
											</Button>
										</Form>
									</Fade>
								</Paragraph>
							</Block>
							<Block flexBasis="50" align="center">
								<Paragraph className="text-center" padding="0">
									<Fade>
										<Img
											src="/static/images/_general/info-form-.jpg"
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

DataIntegrationPage.propTypes = {
	t: PropTypes.func.isRequired,
};

export default withNamespaces('data-integration-page')(DataIntegrationPage);
