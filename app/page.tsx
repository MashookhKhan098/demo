import { Mail, Phone, MapPin } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-start md:items-center justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-wide">URE Legal</h1>
            <p className="text-sm tracking-[0.3em] uppercase mt-1">Advocates</p>
          </div>
          <div className="text-right text-sm mt-4 md:mt-0 leading-relaxed">
            <p className="font-semibold">NEW DELHI</p>
            <p>266, Civil Wings</p>
            <p>Tis Hazari Court</p>
            <p>New Delhi - 110064, INDIA</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-10">
        {/* Introduction */}
        <section className="mb-10">
          <p className="text-sm leading-relaxed">
            URE Legal Advocates, established in 1999, specializes in commercial disputes and cross border transactions and taxation
            litigation and family law practices, having experience of 27 years continuous standing at the Bar in the Supreme Court of India,
            various High Courts, Commissions, Regulatory Bodies and Tribunals.
          </p>
        </section>

        {/* Practice Areas */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold tracking-wide uppercase mb-8 border-b pb-2">Practice Areas</h2>

          {/* Corporate, Commercial Litigation */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold mb-4">Corporate, Commercial Litigation and White Collar Crime Practices</h3>
            <p className="text-sm leading-relaxed mb-4">
              We offer dispute services in commercial and debt recovery, corporate, contractual, and IP disputes, as well as real estate,
              banking, anti-trust, and employment matters, for litigation, arbitration, and ADR. We extended experience in representing clients
              before <strong>Directorate of Revenue Intelligence (DRI)</strong>, <strong>Central Bureau of Investigation (CBI)</strong>, <strong>Directorate of Enforcement (ED)</strong> and
              <strong> National Investigating Agency (NIA)</strong>.
            </p>
            <ul className="list-disc list-inside text-sm space-y-2 ml-4">
              <li>
                <strong>Commercial and Non-Commercial Debt Recovery:</strong> Recovery of commercial debts and disputes arising from business and
                Tax Sale: Non-payment of loans, credit disputes, and balance-to-due.
              </li>
              <li>
                <strong>Contractual Disputes:</strong> Breach of contract terms, including non-performance and misrepresentation.
              </li>
              <li>
                <strong>Corporate Disputes:</strong> Issues related to company affairs, shareholder disputes, mergers, and <strong>Insolvency and Bankruptcy</strong>.
              </li>
              <li>
                <strong>Intellectual Property (IP) Disputes:</strong> Conflicts over patents, copyrights, trademarks, and trade secrets.
              </li>
              <li>
                <strong>Partnership Disputes:</strong> Conflicts over profit sharing and roles, management of Partnership.
              </li>
              <li>
                <strong>Arbitration and ADR:</strong> Resolving disputes through arbitration, mediation, and conciliation.
              </li>
              <li>
                <strong>Banking and Finance Disputes:</strong> Issues involving loans, guarantees and financial instruments, guided by the <strong>Negotiable
                  Instruments Act, SARFAESI Act, and Insolvency and Bankruptcy</strong>.
              </li>
              <li>
                <strong>Real Estate and Property Disputes:</strong> Matters involving land, commercial property, and leases under the <strong>Transfer of Property
                  Act, Real Estate (Regulation and Development) Act, (RERA)</strong>.
              </li>
              <li>
                <strong>Competition and Antitrust Disputes:</strong> Addressing anti-competitive practices under Competition Act.
              </li>
              <li>
                <strong>Insurance and Consumer Disputes:</strong> Addressing claim disputes under the <strong>Insurance Act, BOSE</strong> and Consumer Protection Act,
                2019.
              </li>
              <li>
                <strong>Employment and Labor Disputes:</strong> Conflicts over employment terms under the <strong>Industrial Disputes Act, 1947</strong> and recent labor
                codes.
              </li>
            </ul>
          </div>

          {/* Taxation Practices */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold mb-4">Taxation Practices</h3>
            <p className="text-sm leading-relaxed mb-4">
              We provide counselling on tax litigation, investigations, and seizures, and customs, GST, customs along with Alternative
              Dispute Resolution (ADR), AAR, and Advance Rulings. Additionally, we act as expert witnesses in treaty interpretation and
              transfer pricing cases.
            </p>
            <p className="text-sm leading-relaxed mb-4">
              We have vast and extensive experience representing clients before the Assessing Office (AO), Commissioner of Income Tax
              (CIT), Income Tax Appellate Tribunal (ITAT), High Court, Supreme Court, Goods and Services Tax Appellate Tribunal (GSTAT),
              Customs, Excise, and Service Tax Appellate Tribunal (CESTAT), Directorate General of GST Intelligence (DGGI), and National
              Anti-Profiteering Authority (NAA).
            </p>
            <ul className="list-disc list-inside text-sm space-y-2 ml-4">
              <li>
                <strong>Transfer Pricing Disputes:</strong> Including pricing of inter-company transactions.
              </li>
              <li>
                <strong>Search and Seizure Defense:</strong> In Income Tax, Goods and Service Tax, and Customs.
              </li>
              <li>
                <strong>Appeal, Assessment and Refund Disputes:</strong> Arise from income Tax, Goods and Services Tax, and Customs orders for
                various matters.
              </li>
              <li>
                <strong>Penalty Proceedings:</strong> Contesting penalties for non-compliance.
              </li>
              <li>
                <strong>Customs and Excise Disputes:</strong> Related to duties and compliance.
              </li>
            </ul>
          </div>

          {/* Cross-Border Transactions */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold mb-4">Cross-Border Transactions and Mergers Practice</h3>
            <p className="text-sm leading-relaxed mb-4">
              We specialize in managing legal complexities of cross-border transactions and mergers in India, compliance and address
              challenges.
            </p>

            <h4 className="text-sm font-semibold mt-4 mb-2">Cross-Border Transactions and International Trade Disputes:</h4>
            <ul className="list-disc list-inside text-sm space-y-2 ml-4 mb-4">
              <li>Legal guidance on <strong>FEMA compliance and RBI regulations</strong>.</li>
              <li>Drafting and negotiating international contracts.</li>
              <li>Conducting due diligence and managing cross-border dispute resolution.</li>
            </ul>

            <h4 className="text-sm font-semibold mt-4 mb-2">Mergers and Acquisitions:</h4>
            <ul className="list-disc list-inside text-sm space-y-2 ml-4 mb-4">
              <li>Strategic counsel on M&A transactions under the Companies Act and Competition Act.</li>
              <li>Preparation and filing of necessary documentation with regulatory bodies.</li>
              <li>Facilitation of post-merger integration and compliance.</li>
            </ul>
          </div>

          {/* Family Law Practices */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold mb-4">Family Law Practices</h3>
            <p className="text-sm leading-relaxed mb-4">
              We provide expert compassionate litigation, thorough representation throughout for family law matters.
            </p>

            <h4 className="text-sm font-semibold mt-4 mb-2">Marriage-Related Issues</h4>
            <ul className="list-disc list-inside text-sm space-y-2 ml-4 mb-4">
              <li><strong>Divorce & Separation:</strong> Expertly handling marital dissolution, child custody.</li>
              <li><strong>Alimony & Maintenance:</strong> Securing fair financial support for dependents.</li>
              <li><strong>Restitution of Conjugal Rights:</strong> Resolving disputes to resume marital relations.</li>
              <li><strong>Dowry Disputes:</strong> Addressing dowry demands and harassment.</li>
              <li><strong>Domestic Violence:</strong> Offering support and legal remedies for abuse.</li>
            </ul>

            <h4 className="text-sm font-semibold mt-4 mb-2">Child Related Issues</h4>
            <ul className="list-disc list-inside text-sm space-y-2 ml-4 mb-4">
              <li><strong>Child Custody & Guardianship:</strong> Settling custody and guardianship disputes.</li>
              <li><strong>Adoption:</strong> Legal support for the adoption process.</li>
              <li><strong>Parental Rights & Child Support:</strong> Facilitating parental responsibilities and child support.</li>
            </ul>

            <h4 className="text-sm font-semibold mt-4 mb-2">Property & Inheritance-Related Issues</h4>
            <ul className="list-disc list-inside text-sm space-y-2 ml-4 mb-4">
              <li><strong>Property Disputes:</strong> Managing property division and inheritance conflicts.</li>
              <li><strong>Inheritance & Succession:</strong> Handling asset distribution and succession matters.</li>
            </ul>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div className="text-sm space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+91 99999 44807</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>011 3585 0602</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>For Enquiry: <a href="mailto:ea@urelegal.in" className="underline hover:text-gray-300">ea@urelegal.in</a></span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>For Careers and Internships: <a href="mailto:hr@urelegal.in" className="underline hover:text-gray-300">hr@urelegal.in</a></span>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              {/* Social Media Icons */}
              <a href="#" className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition-colors" aria-label="Instagram">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition-colors" aria-label="Twitter">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition-colors" aria-label="Facebook">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition-colors" aria-label="LinkedIn">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-gray-700 text-xs text-gray-400">
            <p>All account of restrictions imposed by the Advocates of the Bar Council of India, we are unable to solicit work in any form. This website is solely for informational purpose. The information provided on this site should not be construed as legal advice.</p>
            <div className="flex gap-4 mt-2">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Report a Concern</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}