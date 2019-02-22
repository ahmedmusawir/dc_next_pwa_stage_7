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
import { Table } from 'reactstrap';
import { Link, withNamespaces } from 'i18n';

class FieldDevelopmentPage extends Component {
	static async getInitialProps() {
		return {
			namespacesRequired: ['field-development-page'],
		};
	}

	render() {
		const { t } = this.props;

		return (
			<Layout
				title="Deep Cast - Field Development"
				description="Artificial intelligence is changing how business works, but most companies don’t know how to make AI work for them. But here at Deep Cast, we do."
			>
				{/* TOP HERO SECTION */}
				<SectionBackground bgImgLink="/static/images/_field-development/field-dev-header.jpg">
					<PageContainer>
						<Section height="lg" className="product-hero field-dev-hero">
							<Block flexBasis="60" className="hero-block-1 text-center">
								<Paragraph>
									<Fade>
										<H1 light fontWeight="800">
											{t('hero-title')}
										</H1>
										<H6 light>{t('hero-subtitle')}</H6>
									</Fade>
								</Paragraph>
							</Block>
						</Section>
					</PageContainer>
				</SectionBackground>

				{/* CHARTS SECTION */}
				<SectionBackground className="pt-5 pb-5 section-container">
					<PageContainer>
						<Section
							gridStart="800px"
							height="10rem"
							className="field-dev-physics-section"
						>
							<Block flexBasis="50">
								<H3
									fontWeight="600"
									className="text-center p-5 m-5 field-dev-modeling-section"
								>
									Challenges of traditional subsurface modeling
								</H3>
							</Block>
						</Section>
						<Section gridStart="800px" className="mb-5 pb-5">
							<Block flexBasis="33" direction="column">
								<Paragraph>
									<Fade>
										{/* <Chart type="line" /> */}
										<Img
											src="/static/images/_field-development/field-dev-complex.jpg.jpg"
											alt="deepcast"
											className="img-fluid w-100"
										/>
									</Fade>
								</Paragraph>
								<Paragraph className="text-center">
									<Fade>
										<H4 fontWeight="600">Complex</H4>
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
											src="/static/images/_field-development/field-dev-slow.jpg"
											alt="deepcast"
											className="img-fluid w-100"
										/>
									</Fade>
								</Paragraph>
								<Paragraph className="text-center">
									<Fade>
										<H4 fontWeight="600">Slow</H4>
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
											src="/static/images/_field-development/field-dev-inaccurate.jpg"
											alt="deepcast"
											className="img-fluid w-100"
										/>
									</Fade>
								</Paragraph>
								<Paragraph className="text-center">
									<Fade>
										<H4 fontWeight="600">Inaccurate</H4>
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

				{/* PHYSICS SECTION */}
				<SectionBackground
					className="section-container pb-5 pt-5"
					bgColor="light"
				>
					<PageContainer>
						<Section gridStart="1300px" className="field-dev-physics-section">
							<Block flexBasis="50">
								<Paragraph padding="3rem">
									<Fade>
										<H3 fontWeight="600">Physics Informed AI</H3>
										<H5 grey>
											Lorem ipsum dolor, sit amet consectetur adipisicing elit.
											Molestias dolores quia sit harum accusamus quaerat
											repudiandae.
										</H5>
										<H5 grey>
											Lorem ipsum dolor, sit amet consectetur adipisicing elit.
											Lorem ipsum dolor, sit amet consectetur adipisicing elit.
											repudiandae.
										</H5>
									</Fade>
								</Paragraph>
							</Block>
							<Block flexBasis="50">
								<Paragraph padding="2rem" className="table-box">
									<Fade>
										<Table>
											<thead>
												<tr>
													<th>Rank</th>
													<th>Scenario</th>
													<th>Confidence</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td scope="row">#1</td>
													<td>B</td>
													<td>92%</td>
												</tr>
												<tr>
													<td scope="row">#2</td>
													<td>F</td>
													<td>84%</td>
												</tr>
												<tr>
													<td scope="row">#3</td>
													<td>D</td>
													<td>76%</td>
												</tr>
											</tbody>
										</Table>
									</Fade>
								</Paragraph>
							</Block>
							<Block flexBasis="50">
								<Paragraph padding="3rem">
									<Fade>
										<H3 fontWeight="600">Smart Optimization</H3>
										<H5 grey>
											Lorem ipsum dolor, sit amet consectetur adipisicing elit.
											Molestias dolores quia sit harum accusamus quaerat
											repudiandae.
										</H5>
										<H5 grey>
											Lorem ipsum dolor, sit amet consectetur adipisicing elit.
											Lorem ipsum dolor, sit amet consectetur adipisicing elit.
											repudiandae.
										</H5>
									</Fade>
								</Paragraph>
							</Block>

							<Block flexBasis="50">
								<Paragraph className="text-center">
									<Fade>
										<Img
											src="/static/images/_field-development/field-dev-physics-gadget-309x666.png"
											alt="deepcast"
											className="img-fluid"
										/>
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
							className="border-box-section"
							justify="flex-end"
						>
							<Block flexBasis="40" className="img-block">
								<Img
									src="/static/images/_field-development/field-dev-graph-1.jpg"
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
							bgImgLink="/static/images/_field-development/field-dev-slider-800x500.jpg"
							className=""
						>
							<Img
								src="/static/images/_field-development/field-dev-slider-800x500.jpg"
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

FieldDevelopmentPage.propTypes = {
	t: PropTypes.func.isRequired,
};

export default withNamespaces('field-development-page')(FieldDevelopmentPage);
