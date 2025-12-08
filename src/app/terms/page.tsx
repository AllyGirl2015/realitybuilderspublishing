'use client';

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 space-y-8 text-gray-300">
      <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
      
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">1. Agreement to Terms</h2>
        <p>
          By accessing our website, you agree to be bound by these Terms of Service and to comply with all applicable laws and regulations. If you do not agree with these terms, you are prohibited from using or accessing this site.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">2. Intellectual Property Rights</h2>
        <p>
          Other than the content you own, under these Terms, Reality Builders Publishing and/or its licensors own all the intellectual property rights and materials contained in this Website. You are granted limited license only for purposes of viewing the material contained on this Website.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">3. Restrictions</h2>
        <p>
          You are specifically restricted from all of the following:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Publishing any Website material in any other media;</li>
          <li>Selling, sublicensing and/or otherwise commercializing any Website material;</li>
          <li>Publicly performing and/or showing any Website material;</li>
          <li>Using this Website in any way that is or may be damaging to this Website;</li>
          <li>Using this Website in any way that impacts user access to this Website;</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">4. Content Liability</h2>
        <p>
          We shall not be held responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">5. Governing Law</h2>
        <p>
          These Terms shall be governed and construed in accordance with the laws of the State of New York, without regard to its conflict of law provisions.
        </p>
      </section>
      
      <div className="pt-8 text-sm text-gray-500">
        Last updated: October 26, 2025
      </div>
    </div>
  );
}
