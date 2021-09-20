import Layout from '../components/Layout';
import Head from 'next/head';

export default function HomePage() {
	return (
		<Layout>
			<Head>
				<title>DJ Events</title>
				<meta name='description' content='Welcome to DJ Events' />
			</Head>
      
			<h1>Home</h1>
		</Layout>
	);
}
