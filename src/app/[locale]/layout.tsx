import {notFound} from 'next/navigation';
import "../../styles/tailwind.css";
import "../../styles/tailwind-utils.css";
import '../../styles/index.css'
import { Metadata } from 'next';
import PlausibleProvider from 'next-plausible'
import Script from 'next/script'
import {UserContextProvider} from "components/UserContext";
import { League_Spartan } from 'next/font/google'
import {NextIntlClientProvider, useMessages} from 'next-intl';

export const metadata: Metadata = {
	title: '',
	description: '',
};

const leagueSpartan = League_Spartan({
	weight: ['700', '800'],
	display: 'swap',
	subsets: ['latin']
})

const locales = [
	"ar",
	"cs",
	"da",
	"de",
	"el",
	"en",
	"es",
	"fi",
	"fr",
	"hr",
	"hu",
	"id",
	"it",
	"ja",
	"lv",
	"nl",
	"no",
	"pl",
	"pt",
	"pt-BR",
	"ro",
	"ru",
	"sk",
	"sl",
	"sq",
	"sr",
	"sv",
	"ta",
	"tr",
	"uk",
	"zh",
	"zh-HK"
];

export default function RootLayoutt({children, params: {locale}}) {
	if (!locales.includes(locale as any)) notFound();
	
	const messages = useMessages();
	
	return (
		<PlausibleProvider>
			<UserContextProvider>
				<NextIntlClientProvider locale={locale} messages={messages}>
					<html lang={locale} className={leagueSpartan.className}>
						<head>
							<PlausibleProvider domain={process.env.NEXT_PUBLIC_PLAUSIBLE_KEY} />
							<Script strategy="lazyOnload" data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="f1cal" data-description="Support F1 Calendar on Buy me a coffee!" data-message="" data-color="#d10f1e" data-position="Right" data-x_margin="18" data-y_margin="18" />
								
							<meta
								name="viewport"
								content="width=device-width, initial-scale=1, maximum-scale=5"
							/>
							<link
								rel="apple-touch-icon"
								sizes="180x180"
								href="/apple-touch-icon.png"
							/>
							<link
								rel="icon"
								type="image/png"
								sizes="32x32"
								href="/favicon-32x32.png"
							/>
							<link
								rel="icon"
								type="image/png"
								sizes="16x16"
								href="/favicon-16x16.png"
							/>
							<link rel="manifest" href="/site.webmanifest" />
							<link
								rel="mask-icon"
								href="/safari-pinned-tab.svg"
								color="#eb000f"
							/>
							
							<meta name="msapplication-TileColor" content="#000000" />
							<meta name="theme-color" content="#03120f" />
							
							<meta name="format-detection" content="telephone=no" />
							<meta name="mobile-web-app-capable" content="yes" />
							
							{process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION && (
								<meta
									name="google-site-verification"
									content={process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION}
								/>
							)}
								
						</head>
						<body>	
							{children}
						</body>
					</html>
				</NextIntlClientProvider>
			</UserContextProvider>
		</PlausibleProvider>
	);
}
