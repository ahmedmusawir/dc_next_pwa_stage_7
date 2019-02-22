import React from 'react';
// import Link from 'next/link';
import styled from 'styled-components';
import { Layout, PageContainer, ImageSlider } from 'components/layout';
import { UncontrolledTooltip } from 'reactstrap';
import Fade from 'react-reveal/Fade';
import {
	H1,
	H2,
	H3,
	H4,
	H5,
	H6,
	P,
	A,
	Img,
	Div,
	Card,
	Box,
	Section,
	Block,
	Small,
	Paragraph,
	SectionBackground,
	Slider,
	Form,
	FormGroup,
	Button,
	Input,
} from 'components/general';
import { Label, FormText } from 'reactstrap';
import { Link, withNamespaces } from 'i18n';

const FileNameBox = styled.span`
	margin-left: 10px;
	@media (max-width: 1350px) {
		display: block;
		margin-top: 1rem;
		margin-bottom: 1rem;
		font-size: 0.8rem;
	}
`;
const LinkedInBox = styled.a`
	position: absolute;
	margin-top: -3.7rem;
	margin-left: 1.1rem;
	img.linkedin {
		width: 50px !important;
	}

	@media (min-width: 1200px) {
		margin-top: -3.7rem;
		margin-left: 1.6rem;
	}
`;

class AboutPage extends React.Component {
	static async getInitialProps() {
		return {
			namespacesRequired: ['about-page'],
		};
	}

	state = {
		fileName: '',
	};
	handleFileUpload = e => {
		const file = e.target.files[0];
		const chosenFile = e.target.files[0].name;

		//User Cancelled
		if (!file) {
			return;
		}

		this.setState({ fileName: chosenFile });
	};
	render() {
		const { t } = this.props;

		return (
			<Layout
				title="Deep Cast - AboutPage"
				description="Artificial intelligence is changing how business works, but most companies don’t know how to make AI work for them. But here at Deep Cast, we do."
			>
				{/* TEAM HERO SLIDER BLOCK */}
				<SectionBackground bgColor="light" className="section-container">
					<Section
						gridStart="1350px"
						height="lg"
						className="about-hero-section"
					>
						<Block flexBasis="40">
							<Paragraph padding="4rem" className="about-hero-text">
								<Fade>
									<H1 fontWeight="800" info>
										{/* More than 30 years of shared experience for the best results */}
										{t('hero-title')}
									</H1>
									<H6 italic>
										Our results are reflected on our customers opinions Lorem
										ipsum dolor sit amet consectetur adipisicing elit. Quam
										expedita facilis similique sapiente veritatis exercitationem
										quae amet debitis itaque assumenda ad atque
									</H6>
									<H6 italic>
										Lorem ipsum dolor, sit amet consectetur adipisicing elit.
										Molestias dolores quia sit harum accusamus quaerat
									</H6>
								</Fade>
							</Paragraph>
						</Block>
						<Block flexBasis="60">
							<ImageSlider />
						</Block>
					</Section>
				</SectionBackground>

				{/* TEAM MEMBER SECION 1 */}
				<SectionBackground bgColor="" className="section-container pt-5 pb-5">
					<PageContainer>
						<Section
							center
							gridStart="300px"
							className="about-team-section pt-5 pb-5"
						>
							<Block>
								<Paragraph>
									<H3 fontWeight="800" className="text-center">
										Core Team
									</H3>
								</Paragraph>
							</Block>
							<Block flexBasis="20">
								<Paragraph className="text-center member">
									<Card
										imgSrc="/static/images/_about/_members/hector-klie.jpg"
										padding="0"
									>
										<LinkedInBox
											href="https://www.linkedin.com/in/hklie/"
											target="_blank"
										>
											<img
												src="/static/images/_about/linkedin-40x40.png"
												alt="LinkedIn"
												className="img-fluid linkedin"
											/>
										</LinkedInBox>
										<Fade>
											<Div className="text">
												<H6 fontWeight="800">Hector Klie</H6>
												<P>
													<small> CEO, Lead Data Scientist</small>
												</P>
											</Div>
											<Div className="about-icon-holder mx-auto">
												<img
													src="/static/images/_about/30plus-icon.jpg"
													alt=""
													className="about-icon float-left"
													id="plus1"
												/>
												<UncontrolledTooltip placement="bottom" target="plus1">
													30 years of experience
												</UncontrolledTooltip>
												<img
													src="/static/images/_about/phd-icon.jpg"
													alt=""
													className="about-icon float-left"
													id="phd1"
												/>

												<UncontrolledTooltip placement="bottom" target="phd1">
													Doctoral degree
												</UncontrolledTooltip>
												<img
													src="/static/images/_about/shield-icon.jpg"
													alt=""
													className="about-icon float-left"
													id="shield1"
												/>
												<UncontrolledTooltip
													placement="bottom"
													target="shield1"
												>
													A shield
												</UncontrolledTooltip>
											</Div>
										</Fade>
									</Card>
								</Paragraph>
							</Block>
							<Block flexBasis="20">
								<Paragraph className="text-center member">
									<Card
										imgSrc="/static/images/_about/_members/arturo-klie.jpg"
										padding="0"
									>
										<LinkedInBox
											href="https://www.linkedin.com/in/klieart/"
											target="_blank"
										>
											<img
												src="/static/images/_about/linkedin-40x40.png"
												alt="LinkedIn"
												className="img-fluid linkedin"
											/>
										</LinkedInBox>
										<Fade>
											<Div className="text">
												<H6 fontWeight="800">Arturo Klie</H6>
												<P>
													<small> CTO, Sr. Software Engineer</small>
												</P>
											</Div>
											<Div className="about-icon-holder mx-auto">
												<img
													src="/static/images/_about/30plus-icon.jpg"
													alt="LinkedIn"
													className="about-icon float-left"
													id="plus2"
												/>
												<UncontrolledTooltip placement="bottom" target="plus2">
													30 years of experience
												</UncontrolledTooltip>
												<img
													src="/static/images/_about/phd-icon.jpg"
													alt="LinkedIn"
													className="about-icon float-left"
													id="phd2"
												/>
												<UncontrolledTooltip placement="bottom" target="phd2">
													Doctoral degree
												</UncontrolledTooltip>
												<img
													src="/static/images/_about/shield-icon.jpg"
													alt="LinkedIn"
													className="about-icon float-left"
													id="shield2"
												/>
												<UncontrolledTooltip
													placement="bottom"
													target="shield2"
												>
													A shield
												</UncontrolledTooltip>
											</Div>
										</Fade>
									</Card>
								</Paragraph>
							</Block>
							<Block flexBasis="20">
								<Paragraph className="text-center member">
									<Card
										imgSrc="/static/images/_about/_members/duc-le.jpg"
										padding="0"
									>
										<LinkedInBox
											href="https://www.linkedin.com/in/duchuule/"
											target="_blank"
										>
											<img
												src="/static/images/_about/linkedin-40x40.png"
												alt="LinkedIn"
												className="img-fluid linkedin"
											/>
										</LinkedInBox>
										<Fade>
											<Div className="text">
												<H6 fontWeight="800">Duc Le</H6>
												<P>
													<small>
														{' '}
														Sr. Reservoir Engineer, Software Engineer
													</small>
												</P>
											</Div>
											<Div className="about-icon-holder mx-auto">
												<img
													src="/static/images/_about/30plus-icon.jpg"
													alt="LinkedIn"
													className="about-icon float-left"
													id="plus3"
												/>
												<UncontrolledTooltip placement="bottom" target="plus3">
													30 years of experience
												</UncontrolledTooltip>
												<img
													src="/static/images/_about/phd-icon.jpg"
													alt="LinkedIn"
													className="about-icon float-left"
													id="phd3"
												/>
												<UncontrolledTooltip placement="bottom" target="phd3">
													Doctoral degree
												</UncontrolledTooltip>
												<img
													src="/static/images/_about/shield-icon.jpg"
													alt="LinkedIn"
													className="about-icon float-left"
													id="shield3"
												/>
												<UncontrolledTooltip
													placement="bottom"
													target="shield3"
												>
													A shield
												</UncontrolledTooltip>
											</Div>
										</Fade>
									</Card>
								</Paragraph>
							</Block>
							<Block flexBasis="20">
								<Paragraph className="text-center member">
									<Card
										imgSrc="/static/images/_about/_members/duc-vuong.jpg"
										padding="0"
									>
										<LinkedInBox
											href="https://www.linkedin.com/in/duc-vuong/"
											target="_blank"
										>
											<img
												src="/static/images/_about/linkedin-40x40.png"
												alt="LinkedIn"
												className="img-fluid linkedin"
											/>
										</LinkedInBox>
										<Fade>
											<Div className="text">
												<H6 fontWeight="800">Duc Vuong</H6>
												<P>
													<small>
														{' '}
														Sr. Petroleum Engineer, Software Engineer
													</small>
												</P>
											</Div>
											<Div className="about-icon-holder mx-auto">
												<img
													src="/static/images/_about/30plus-icon.jpg"
													alt="LinkedIn"
													className="about-icon float-left"
													id="plus4"
												/>
												<UncontrolledTooltip placement="bottom" target="plus4">
													30 years of experience
												</UncontrolledTooltip>
												<img
													src="/static/images/_about/phd-icon.jpg"
													alt="LinkedIn"
													className="about-icon float-left"
													id="phd4"
												/>
												<UncontrolledTooltip placement="bottom" target="phd4">
													Doctoral degree
												</UncontrolledTooltip>
												<img
													src="/static/images/_about/shield-icon.jpg"
													alt="LinkedIn"
													className="about-icon float-left"
													id="shield4"
												/>
												<UncontrolledTooltip
													placement="bottom"
													target="shield4"
												>
													A shield
												</UncontrolledTooltip>
											</Div>
										</Fade>
									</Card>
								</Paragraph>
							</Block>
							<Block flexBasis="20">
								<Paragraph className="text-center member">
									<Card
										imgSrc="/static/images/_about/_members/wei-ma.jpg"
										padding="0"
									>
										<LinkedInBox
											href="https://www.linkedin.com/in/wei-ma-1b01b541/"
											target="_blank"
										>
											<img
												src="/static/images/_about/linkedin-40x40.png"
												alt="LinkedIn"
												className="img-fluid linkedin"
											/>
										</LinkedInBox>
										<Fade>
											<Div className="text">
												<H6 fontWeight="800">Wei Ma</H6>
												<P>
													<small> Sr. Petroleum Engineer, Data Scientist</small>
												</P>
											</Div>
											<Div className="about-icon-holder mx-auto">
												<img
													src="/static/images/_about/30plus-icon.jpg"
													alt="LinkedIn"
													className="about-icon float-left"
													id="plus5"
												/>
												<UncontrolledTooltip placement="bottom" target="plus5">
													30 years of experience
												</UncontrolledTooltip>
												<img
													src="/static/images/_about/phd-icon.jpg"
													alt="LinkedIn"
													className="about-icon float-left"
													id="phd5"
												/>
												<UncontrolledTooltip placement="bottom" target="phd5">
													Doctoral degree
												</UncontrolledTooltip>
												<img
													src="/static/images/_about/shield-icon.jpg"
													alt="LinkedIn"
													className="about-icon float-left"
													id="shield5"
												/>
												<UncontrolledTooltip
													placement="bottom"
													target="shield5"
												>
													A shield
												</UncontrolledTooltip>
											</Div>
										</Fade>
									</Card>
								</Paragraph>
							</Block>
						</Section>
					</PageContainer>
				</SectionBackground>

				{/* TEAM MEMBER SECION 2 */}
				<SectionBackground bgColor="" className="section-container pb-5">
					<PageContainer>
						<Section center gridStart="300px" className="about-team-section">
							<Block>
								<Paragraph>
									<H3 fontWeight="800" className="text-center">
										Advisors
									</H3>
								</Paragraph>
							</Block>

							<Block flexBasis="20">
								<Paragraph className="text-center member">
									<Card
										imgSrc="/static/images/_about/_members/yves.jpg"
										padding="0"
									>
										<LinkedInBox
											href="https://www.linkedin.com/in/yves-m-r-chevalier-1b915451/"
											target="_blank"
										>
											<img
												src="/static/images/_about/linkedin-40x40.png"
												alt="LinkedIn"
												className="img-fluid linkedin"
											/>
										</LinkedInBox>
										<Fade>
											<Div className="text">
												<H6 fontWeight="800">Yves Chevalier</H6>
												<P>
													<small> Exploration Geosciences Expert</small>
												</P>
											</Div>
											<Div className="about-icon-holder mx-auto">
												<img
													src="/static/images/_about/30plus-icon.jpg"
													alt="LinkedIn"
													className="about-icon float-left"
													id="plus6"
												/>
												<UncontrolledTooltip placement="bottom" target="plus6">
													30 years of experience
												</UncontrolledTooltip>
												<img
													src="/static/images/_about/phd-icon.jpg"
													alt="LinkedIn"
													className="about-icon float-left"
													id="phd6"
												/>
												<UncontrolledTooltip placement="bottom" target="phd6">
													Doctoral degree
												</UncontrolledTooltip>
												<img
													src="/static/images/_about/shield-icon.jpg"
													alt="LinkedIn"
													className="about-icon float-left"
													id="shield6"
												/>
												<UncontrolledTooltip
													placement="bottom"
													target="shield6"
												>
													A shield
												</UncontrolledTooltip>
											</Div>
										</Fade>
									</Card>
								</Paragraph>
							</Block>
							<Block flexBasis="20">
								<Paragraph className="text-center member">
									<Card
										imgSrc="/static/images/_about/_members/tan.jpg"
										padding="0"
									>
										<LinkedInBox
											href="https://www.linkedin.com/in/tan-nguyen-031b8596/"
											target="_blank"
										>
											<img
												src="/static/images/_about/linkedin-40x40.png"
												alt="LinkedIn"
												className="img-fluid linkedin"
											/>
										</LinkedInBox>
										<Fade>
											<Div className="text">
												<H6 fontWeight="800">Tan Nguyen</H6>
												<P>
													<small>
														{' '}
														Drilling and Production Engineer Expert
													</small>
												</P>
											</Div>
											<Div className="about-icon-holder mx-auto">
												<img
													src="/static/images/_about/30plus-icon.jpg"
													alt="LinkedIn"
													className="about-icon float-left"
													id="plus7"
												/>
												<UncontrolledTooltip placement="bottom" target="plus7">
													30 years of experience
												</UncontrolledTooltip>
												<img
													src="/static/images/_about/phd-icon.jpg"
													alt="LinkedIn"
													className="about-icon float-left"
													id="phd7"
												/>
												<UncontrolledTooltip placement="bottom" target="phd7">
													Doctoral degree
												</UncontrolledTooltip>
												<img
													src="/static/images/_about/shield-icon.jpg"
													alt="LinkedIn"
													className="about-icon float-left"
													id="shield7"
												/>
												<UncontrolledTooltip
													placement="bottom"
													target="shield7"
												>
													A shield
												</UncontrolledTooltip>
											</Div>
										</Fade>
									</Card>
								</Paragraph>
							</Block>
							<Block flexBasis="20">
								<Paragraph className="text-center member">
									<Card
										imgSrc="/static/images/_about/_members/reinaldo.jpg"
										padding="0"
									>
										<LinkedInBox
											href="https://www.linkedin.com/in/gonzalezreinaldo/"
											target="_blank"
										>
											<img
												src="/static/images/_about/linkedin-40x40.png"
												alt="LinkedIn"
												className="img-fluid linkedin"
											/>
										</LinkedInBox>
										<Fade>
											<Div className="text">
												<H6 fontWeight="800">Reinaldo Gonzalez</H6>
												<P>
													<small> Geomodeling and Risk Analysis Expert</small>
												</P>
											</Div>
											<Div className="about-icon-holder mx-auto">
												<img
													src="/static/images/_about/30plus-icon.jpg"
													alt="LinkedIn"
													className="about-icon float-left"
													id="plus8"
												/>
												<UncontrolledTooltip placement="bottom" target="plus8">
													30 years of experience
												</UncontrolledTooltip>
												<img
													src="/static/images/_about/phd-icon.jpg"
													alt="LinkedIn"
													className="about-icon float-left"
													id="phd8"
												/>
												<UncontrolledTooltip placement="bottom" target="phd8">
													Doctoral degree
												</UncontrolledTooltip>
												<img
													src="/static/images/_about/shield-icon.jpg"
													alt="LinkedIn"
													className="about-icon float-left"
													id="shield8"
												/>
												<UncontrolledTooltip
													placement="bottom"
													target="shield8"
												>
													A shield
												</UncontrolledTooltip>
											</Div>
										</Fade>
									</Card>
								</Paragraph>
							</Block>
							<Block flexBasis="20">
								<Paragraph className="text-center member">
									<Card
										imgSrc="/static/images/_about/_members/horacio.jpg"
										padding="0"
									>
										<LinkedInBox
											href="https://www.linkedin.com/in/horacio-florez-87b37b24/"
											target="_blank"
										>
											<img
												src="/static/images/_about/linkedin-40x40.png"
												alt="LinkedIn"
												className="img-fluid linkedin"
											/>
										</LinkedInBox>
										<Fade>
											<Div className="text">
												<H6 fontWeight="800">Horacio Florez</H6>
												<P>
													<small>
														{' '}
														Computational Scientist and Geomechanics Expert
													</small>
												</P>
											</Div>
											<Div className="about-icon-holder mx-auto">
												<img
													src="/static/images/_about/30plus-icon.jpg"
													alt="LinkedIn"
													className="about-icon float-left"
													id="plus9"
												/>
												<UncontrolledTooltip placement="bottom" target="plus9">
													30 years of experience
												</UncontrolledTooltip>
												<img
													src="/static/images/_about/phd-icon.jpg"
													alt="LinkedIn"
													className="about-icon float-left"
													id="phd9"
												/>
												<UncontrolledTooltip placement="bottom" target="phd9">
													Doctoral degree
												</UncontrolledTooltip>
												<img
													src="/static/images/_about/shield-icon.jpg"
													alt="LinkedIn"
													className="about-icon float-left"
													id="shield9"
												/>
												<UncontrolledTooltip
													placement="bottom"
													target="shield9"
												>
													A shield
												</UncontrolledTooltip>
											</Div>
										</Fade>
									</Card>
								</Paragraph>
							</Block>
							<Block flexBasis="20">
								<Paragraph className="text-center member">
									<Card
										imgSrc="/static/images/_about/_members/fetkovich.jpg"
										padding="0"
									>
										<LinkedInBox
											href="https://www.linkedin.com/in/mick-fetkovich-90013235/"
											target="_blank"
										>
											<img
												src="/static/images/_about/linkedin-40x40.png"
												alt="LinkedIn"
												className="img-fluid linkedin"
											/>
										</LinkedInBox>
										<Fade>
											<Div className="text">
												<H6 fontWeight="800">Mick Fetkovich</H6>
												<P>
													<small> Petroleum Engineer Expert</small>
												</P>
											</Div>
											<Div className="about-icon-holder mx-auto">
												<img
													src="/static/images/_about/30plus-icon.jpg"
													alt="LinkedIn"
													className="about-icon float-left"
													id="plus10"
												/>
												<UncontrolledTooltip placement="bottom" target="plus10">
													30 years of experience
												</UncontrolledTooltip>
												<img
													src="/static/images/_about/phd-icon.jpg"
													alt="LinkedIn"
													className="about-icon float-left"
													id="phd10"
												/>
												<UncontrolledTooltip placement="bottom" target="phd10">
													Doctoral degree
												</UncontrolledTooltip>
												<img
													src="/static/images/_about/shield-icon.jpg"
													alt="LinkedIn"
													className="about-icon float-left"
													id="shield10"
												/>
												<UncontrolledTooltip
													placement="bottom"
													target="shield10"
												>
													A shield
												</UncontrolledTooltip>
											</Div>
										</Fade>
									</Card>
								</Paragraph>
							</Block>
						</Section>
					</PageContainer>
				</SectionBackground>

				{/* FORM SECTION */}
				<SectionBackground bgColor="" className="section-container">
					<PageContainer>
						<Section gridStart="767px" className="about-join-us-section">
							<Block flexBasis="50">
								<Paragraph padding="0">
									<Fade bottom cascade>
										<H4 fontWeight="600">Join our team</H4>
										<H6 className="pb-4">
											Sign up for our newsletter to get the latest product
											announcements to get the latest product
										</H6>
										<Form>
											<FormGroup>
												<Label for="file-input" className="file-input-label">
													Attach CV
													<Input
														type="file"
														name="file"
														id="file-input"
														className="file-input"
														onChange={this.handleFileUpload}
													/>
												</Label>
												<FileNameBox>{this.state.fileName}</FileNameBox>
											</FormGroup>
											<FormGroup>
												<Input
													type="textarea"
													name="textarea"
													id="textarea-input"
													placeholder="Tell us why you would like to join DeepCast"
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
							<Block flexBasis="50" align="flex-end">
								<Paragraph className="text-center" padding="0">
									<Fade>
										<Img
											src="/static/images/_about/about-join-us-360x360.jpg"
											alt=""
											className="img-fluid"
										/>
									</Fade>
								</Paragraph>
							</Block>
						</Section>
					</PageContainer>
				</SectionBackground>

				{/* RELATED MEDIA BLOCK */}
				<SectionBackground bgColor="" className="section-container">
					<PageContainer>
						<Fade>
							<Section gridStart="760px" className="related-media">
								<Block flexBasis="100">
									<Paragraph padding="0">
										<H4 grey fontWeight="600" className="pt-5">
											Explore media content
										</H4>
									</Paragraph>
								</Block>
								<Block flexBasis="33">
									<Paragraph padding="0">
										<Link href="/article" passHref>
											<A>
												<Div>
													<Img
														src="https://picsum.photos/400/250?image=0"
														alt="Deep Cast"
														className="img-fluid w-100"
													/>

													<H6 italic fontWeight="600" className="headline">
														Media content description
													</H6>
													<H6 italic className="date">
														<Small>Feb 7, 2019</Small>
													</H6>
												</Div>
											</A>
										</Link>
									</Paragraph>
								</Block>
								<Block flexBasis="33">
									<Paragraph padding="0">
										<Link href="/article" passHref>
											<A>
												<Div>
													<Img
														src="https://picsum.photos/400/250?image=1"
														alt="Deep Cast"
														className="img-fluid w-100"
													/>

													<H6 italic fontWeight="600" className="headline">
														Media content description
													</H6>
													<H6 italic className="date">
														<Small>Feb 7, 2019</Small>
													</H6>
												</Div>
											</A>
										</Link>
									</Paragraph>
								</Block>
								<Block flexBasis="33">
									<Paragraph padding="0">
										<Link href="/article" passHref>
											<A>
												<Div>
													<Img
														src="https://picsum.photos/400/250?image=2"
														alt="Deep Cast"
														className="img-fluid w-100"
													/>

													<H6 italic fontWeight="600" className="headline">
														Media content description
													</H6>
													<H6 italic className="date">
														<Small>Feb 7, 2019</Small>
													</H6>
												</Div>
											</A>
										</Link>
									</Paragraph>
								</Block>
							</Section>
						</Fade>
					</PageContainer>
				</SectionBackground>
			</Layout>
		);
	}
}
export default withNamespaces('about-page')(AboutPage);
