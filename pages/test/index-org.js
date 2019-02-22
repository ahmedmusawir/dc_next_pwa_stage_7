import React from 'react';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';
import {
	Layout,
	PageContainer,
	BlogTile,
	PageBackground,
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

class TestMedia extends React.Component {
	render() {
		return (
			<Layout
				title="Deep Cast - TestMedia Page"
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
									TestMedia
								</H1>
							</Block>
						</Section>
						<Section
							type="grid"
							gridStart="768px"
							className="media-posts-section mb-5"
						>
							<Block gridSize="lg">
								<Link href="/article">
									<BlogTile bgImg="/static/images/blog/cover-1.jpg">
										<Paragraph padding="0" className="post-header">
											<H6 light>This is Post 2 Title</H6>
											<H6 light italic>
												<Small>Feb 9, 2019</Small>
											</H6>
										</Paragraph>
										<aside />
									</BlogTile>
								</Link>
							</Block>
							<Block gridSize="sm">
								<Link href="/article">
									<BlogTile bgImg="/static/images/blog/cover-2.jpg">
										<Paragraph padding="0" className="post-header">
											<H6 light>This is Post 2 Title</H6>
											<H6 light italic>
												<Small>Feb 9, 2019</Small>
											</H6>
										</Paragraph>
										<aside />
									</BlogTile>
								</Link>
							</Block>
							<Block gridSize="sm">
								<Link href="/article">
									<BlogTile bgImg="/static/images/blog/cover-3.png">
										<Paragraph padding="0" className="post-header">
											<H6 light>This is Post 2 Title</H6>
											<H6 light italic>
												<Small>Feb 9, 2019</Small>
											</H6>
										</Paragraph>
										<aside />
									</BlogTile>
								</Link>
							</Block>
							<Block gridSize="sm">
								<Link href="/article">
									<BlogTile bgImg="/static/images/blog/cover-4.png">
										<Paragraph padding="0" className="post-header">
											<H6 light>This is Post 2 Title</H6>
											<H6 light italic>
												<Small>Feb 9, 2019</Small>
											</H6>
										</Paragraph>
										<aside />
									</BlogTile>
								</Link>
							</Block>
							<Block gridSize="sm">
								<Link href="/article">
									<BlogTile bgImg="/static/images/blog/cover-5.png">
										<Paragraph padding="0" className="post-header">
											<H6 light>This is Post 2 Title</H6>
											<H6 light italic>
												<Small>Feb 9, 2019</Small>
											</H6>
										</Paragraph>
										<aside />
									</BlogTile>
								</Link>
							</Block>
							<Block gridSize="sm">
								<Link href="/article">
									<BlogTile bgImg="/static/images/blog/cover-6.png">
										<Paragraph padding="0" className="post-header">
											<H6 light>This is Post 2 Title</H6>
											<H6 light italic>
												<Small>Feb 9, 2019</Small>
											</H6>
										</Paragraph>
										<aside />
									</BlogTile>
								</Link>
							</Block>
							<Block gridSize="sm">
								<Link href="/article">
									<BlogTile bgImg="/static/images/blog/cover-7.png">
										<Paragraph padding="0" className="post-header">
											<H6 light>This is Post 2 Title</H6>
											<H6 light italic>
												<Small>Feb 9, 2019</Small>
											</H6>
										</Paragraph>
										<aside />
									</BlogTile>
								</Link>
							</Block>
							<Block gridSize="sm">
								<Link href="/article">
									<BlogTile bgImg="/static/images/blog/cover-8.png">
										<Paragraph padding="0" className="post-header">
											<H6 light>This is Post 2 Title</H6>
											<H6 light italic>
												<Small>Feb 9, 2019</Small>
											</H6>
										</Paragraph>
										<aside />
									</BlogTile>
								</Link>
							</Block>
							<Block gridSize="sm">
								<Link href="/article">
									<BlogTile bgImg="/static/images/blog/cover-9.png">
										<Paragraph padding="0" className="post-header">
											<H6 light>This is Post 2 Title</H6>
											<H6 light italic>
												<Small>Feb 9, 2019</Small>
											</H6>
										</Paragraph>
										<aside />
									</BlogTile>
								</Link>
							</Block>
						</Section>
						<Section height="10rem">
							<Block className="text-center">
								<Paragraph>
									<Div className="media-pagination">
										<H5 className="float-left">
											<i className="fa fa-arrow-circle-left fa-2x " />
										</H5>
										<H5 className="page-numbers" italic>
											1 or 8
										</H5>
										<H5 className="float-right">
											<i className="fa fa-arrow-circle-right fa-2x " />
										</H5>
									</Div>
									<hr />
								</Paragraph>
							</Block>
						</Section>
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

export default TestMedia;
