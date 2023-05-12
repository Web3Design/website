import { getDictionary } from '@/i18n/getDictionary';
import { Locale } from '@/i18n/config';
import { Typography } from '@/components/typography';
import Contract from '@/views/home/contract';
import Copyright from '@/views/home/copyright';
import Campus from '@/views/home/campus';
import Hacker from '@/views/home/hacker';
import CategoryList from '@/views/home/categoryList';
import Header from '@/views/home/header';
import Features from '@/views/home/features';

export default async function Home({
  params: { lang }
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  console.log(dictionary);

  return (
    <main className="bg-[#63CA2E]">
      <div className="px-[32px] py-[42px] md:px-[38px] md:py-[48px] lg:px-[58px] lg:py-[64px] xl:px-[53px] xl:py-[78px]">
        <Header dictionary={dictionary} />
        <div className="mx-[48px] mt-[169px] flex items-center justify-center rounded-[20px] bg-white px-[16px] py-[24px] md:mx-[78px] md:mt-[109px] md:h-[160px] md:p-0 lg:mx-[108px] lg:mt-[169px] lg:h-[201px]">
          <Typography variant="h3" className="text-center text-[#63CA2E]">
            {dictionary.home.purpose}
          </Typography>
        </div>
        <Features dictionary={dictionary} />
        <div className="mt-[120px] flex flex-col items-center">
          <Typography className="text-center text-white" variant="h3">
            {dictionary.home.ethereumOpenSource}
          </Typography>
          <Typography className="text-center text-white" variant="h3">
            {dictionary.home.centeredDesign}
          </Typography>
        </div>
        <CategoryList dictionary={dictionary} />
        <Hacker dictionary={dictionary} />
        <Campus dictionary={dictionary} />
        <Copyright dictionary={dictionary} />
        <Contract dictionary={dictionary} />
      </div>
    </main>
  );
}
