import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import {
	Layout,
	HeaderTooltipBox,
	PageContainer,
	ChartWithInputRange,
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

class FieldEvaluationPage extends Component {
	static async getInitialProps() {
		return {
			namespacesRequired: ['field-evaluation-page'],
		};
	}

	render() {
		const { t } = this.props;

		return (
			<Layout
				title="Deep Cast - Field Evaluation"
				description="Artificial intelligence is changing how business works, but most companies don’t know how to make AI work for them. But here at Deep Cast, we do."
			>
				{/* TOP HERO SECTION */}
				<SectionBackground bgImgLink="/static/images/_field-evaluation/field-eval-header.jpg">
					<PageContainer>
						<Section height="lg" className="product-hero">
							<Block flexBasis="35" className="hero-block-1">
								<Paragraph>
									<Fade>
										<H1 info fontWeight="800">
											{t('hero-title')}
										</H1>
										<H6>{t('hero-subtitle')}</H6>
									</Fade>
								</Paragraph>
							</Block>
							<Block flexBasis="60" className="hero-block-2">
								{/* <HeaderTooltipBox>
									<Fade>
										<H4 bold className="text-center mb-3">
											API: 1234567890
										</H4>
										<P>Some Information</P>
										<P>More Information</P>
										<P>Some Extra Information</P>
										<P>Last set of Information</P>
									</Fade>
								</HeaderTooltipBox> */}
							</Block>
						</Section>
					</PageContainer>
				</SectionBackground>

				{/* BLUE BOX SECTION */}
				<SectionBackground className="pt-5 pb-5 section-container">
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
								bgImgLink="/static/images/_general/blue-box-bg.jpg"
							>
								<Paragraph
									padding="4rem"
									margin="0"
									className="bluebox"
									bgColor="blue"
								>
									<Fade>
										<H4 light fontWeight="600" grey>
											Lot of drilling <br />
											so speed is critical
										</H4>
										<H6 light>
											This is some short description that explains whta the
											product does. This is some short description that explains
											product does. This is some short description that explains
											whta the product does
										</H6>
										<Img
											src="/static/images/_general/blue-box-bg.jpg"
											alt=""
											className="img-fluid w-100"
										/>
									</Fade>
								</Paragraph>
							</Block>
						</Section>
					</PageContainer>
				</SectionBackground>

				{/* TEXT & CHART SECTION */}
				<SectionBackground className="pt-5 pb-5 section-container">
					<PageContainer>
						<Section gridStart="800px">
							{/* <Block flexBasis="100" className="text-center">
								<Paragraph padding="3rem" className="pt-5 pb-5">
									<Fade>
										<H2 fontWeight="600" grey>
											What We Offer
										</H2>
									</Fade>
								</Paragraph>
							</Block> */}
							<Block flexBasis="33" direction="column">
								<Paragraph>
									<Fade>
										{/* <Chart type="line" /> */}
										<Img
											src="/static/images/_field-evaluation/field-eval-chart-1.jpg"
											alt="deepcast"
											className="img-fluid w-100"
										/>
									</Fade>
								</Paragraph>
								<Paragraph className="text-center">
									<Fade>
										<H5 fontWeight="600" className="mb-4">
											Automatic Forecasting
										</H5>
										<H6>
											Lorem ipsum dolor, sit amet consectetur adipisicing elit.
											Molestias dolores quia sit harum accusamus quaerat
											repudiandae.
										</H6>
									</Fade>
								</Paragraph>
							</Block>
							<Block flexBasis="33" direction="column">
								<Paragraph nopadding>
									<Fade>
										{/* <Chart type="pie" /> */}
										<Img
											src="/static/images/_field-evaluation/field-eval-chart-2.jpg"
											alt="deepcast"
											className="img-fluid w-100"
										/>
									</Fade>
								</Paragraph>
								<Paragraph className="text-center">
									<Fade>
										<H5 fontWeight="600" className="mb-4">
											Quick Reservoir Insights
										</H5>
										<H6>
											Lorem ipsum dolor, sit amet consectetur adipisicing elit.
											Molestias dolores quia sit harum accusamus quaerat
											repudiandae.
										</H6>
									</Fade>
								</Paragraph>
							</Block>
							<Block flexBasis="33" direction="column">
								<Paragraph>
									<Fade>
										{/* <Chart type="bar" /> */}
										<Img
											src="/static/images/_field-evaluation/field-eval-chart-3.jpg"
											alt="deepcast"
											className="img-fluid w-100"
										/>
									</Fade>
								</Paragraph>
								<Paragraph className="text-center">
									<Fade>
										<H5 fontWeight="600" className="mb-4">
											Automatic Forecasting
										</H5>
										<H6>
											Lorem ipsum dolor, sit amet consectetur adipisicing elit.
											Molestias dolores quia sit harum accusamus quaerat
											repudiandae.
										</H6>
									</Fade>
								</Paragraph>
							</Block>
						</Section>
					</PageContainer>
				</SectionBackground>

				{/* BORDER BOX SECTION */}
				<SectionBackground className="pt-5 pb-5 section-container">
					<PageContainer className="content-container">
						<Section
							gridStart="1200px"
							className="border-box-section"
							justify="flex-end"
						>
							<Block flexBasis="40" className="img-block">
								<Img
									src="/static/images/_field-evaluation/field-eval-graph-400x250.jpg"
									alt="deepcast"
									className=""
								/>
							</Block>
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
						</Section>
					</PageContainer>
				</SectionBackground>

				{/* CONTENT SLIDER SECTION */}
				<SectionBackground className="section-container" bgColor="light">
					<Section gridStart="1200px">
						<Block flexBasis="50">
							<Paragraph>
								<ContentSlider />
							</Paragraph>
						</Block>
						<Block
							flexBasis="50"
							bgImgLink="/static/images/_field-evaluation/field-eval-slider-800x500.jpg"
							className=""
						>
							<Img
								src="/static/images/_field-evaluation/field-eval-slider-800x500.jpg"
								alt="deepcast"
								className="img-fluid w-100 d-xl-none"
							/>
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

FieldEvaluationPage.propTypes = {
	t: PropTypes.func.isRequired,
};
export default withNamespaces('field-evaluation-page')(FieldEvaluationPage);
