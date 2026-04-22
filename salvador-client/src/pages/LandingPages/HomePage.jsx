import Button from '../../components/Button';
import banner from '../../assets/img/nu_bulldogex_banner.jpg';
import dailyEssentials from '../../assets/img/DailyEssentials.webp';
import studySupplies from '../../assets/img/StudySupplies.jpg';
import campusApparel from '../../assets/img/CampusApparel.webp';

const HomePage = () => {
    return (
        <div className="flex w-full flex-col gap-6">
            <section className="relative min-h-[28rem] overflow-hidden border-y-2 border-blue-900 bg-blue-900 px-4 py-10 sm:px-6 lg:px-8">
                <img
                    src={banner}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover saturate-110"
                />
                <div className="absolute inset-0 bg-blue-900/55" />

                <div className="relative z-10 flex min-h-[22rem] items-start justify-end text-right sm:min-h-[24rem]">
                    <div className="max-w-xl">
                        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-200">
                            Campus Marketplace
                        </p>
                        <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
                            Welcome to BulldogEx Shop
                        </h1>
                        <p className="mt-4 text-sm leading-7 text-slate-100 sm:text-base">
                            Explore campus uniforms, student essentials, and school merch in one
                            quick storefront.
                        </p>
                        <div className="mt-6 flex flex-wrap justify-end gap-3">
                            <Button to="/products">
                                Shop Now
                            </Button>
                            <Button to="/about" variant="primary">
                                About Store
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-y-2 border-blue-900 bg-blue-50 px-4 py-7 sm:px-6 sm:py-9 lg:px-8">
                <div className="mb-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">
                        Store Overview
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-slate-900">Quick shopping blocks</h2>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded-3xl border-2 border-slate-200 bg-white p-5 shadow-sm">
                        <p className="text-2xl font-bold text-slate-900">08</p>
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-600">
                            Products
                        </p>
                    </div>
                    <div className="rounded-3xl border-2 border-slate-200 bg-white p-5 shadow-sm">
                        <p className="text-2xl font-bold text-slate-900">06</p>
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-600">
                            Categories
                        </p>
                    </div>
                    <div className="rounded-3xl border-2 border-slate-200 bg-white p-5 shadow-sm">
                        <p className="text-2xl font-bold text-slate-900">24</p>
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-600">
                            Orders
                        </p>
                    </div>
                    <div className="rounded-3xl border-2 border-slate-200 bg-white p-5 shadow-sm">
                        <p className="text-2xl font-bold text-slate-900">03</p>
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-600">
                            Pickup Slots
                        </p>
                    </div>
                </div>
            </section>

            <section className="border-y-2 border-blue-900 bg-blue-50 px-4 py-7 sm:px-6 sm:py-9 lg:px-8">
                <div className="mb-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">
                        Shop Sections
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-slate-900">Simple store cards</h2>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                    <article className="rounded-3xl border-2 border-slate-200 bg-white p-4 shadow-sm">
                        <div className="overflow-hidden rounded-[1.25rem] bg-slate-100">
                            <img
                                src={dailyEssentials}
                                alt="Daily Essentials"
                                className="aspect-4/3 w-full object-cover"
                            />
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-slate-900">Daily Essentials</h3>
                        <p className="mt-3 text-sm leading-6 text-slate-600">
                            Bags, tumblers, lanyards, and items used every school day.
                        </p>
                        <Button to="/products" className="mt-4" variant="primary">View Products</Button>
                    </article>

                    <article className="rounded-3xl border-2 border-slate-200 bg-white p-4 shadow-sm">
                        <div className="overflow-hidden rounded-[1.25rem] bg-slate-100">
                            <img
                                src={studySupplies}
                                alt="Study Supplies"
                                className="aspect-4/3 w-full object-cover"
                            />
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-slate-900">Study Supplies</h3>
                        <p className="mt-3 text-sm leading-6 text-slate-600">
                            Notes, desk tools, and study kits for class and review weeks.
                        </p>
                        <Button to="/products" className="mt-4" variant="primary">Shop Supplies</Button>
                    </article>

                    <article className="rounded-3xl border-2 border-slate-200 bg-white p-4 shadow-sm">
                        <div className="overflow-hidden rounded-[1.25rem] bg-slate-100">
                            <img
                                src={campusApparel}
                                alt="Campus Apparel"
                                className="aspect-4/3 w-full object-cover"
                            />
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-slate-900">Campus Apparel</h3>
                        <p className="mt-3 text-sm leading-6 text-slate-600">
                            Comfortable pieces for class days, commute days, and weekends.
                        </p>
                        <Button to="/products" className="mt-4" variant="primary">
                            View Apparel
                        </Button>
                    </article>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
