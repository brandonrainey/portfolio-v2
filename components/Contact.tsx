import React, { useState } from 'react'

interface ContactProps {
  ContactRef: React.RefObject<HTMLDivElement>
}

export default function Contact({ ContactRef }: ContactProps) {
  const [copySuccess, setCopySuccess] = useState('')

  const copyToClipboard = async (text: string) => {
    if (typeof window !== 'undefined') {
      try {
        await navigator.clipboard.writeText(text)
        setCopySuccess('Copied!')
        setTimeout(() => setCopySuccess(''), 1500)
      } catch (err) {
        setCopySuccess('Failed to copy text')
        setTimeout(() => setCopySuccess(''), 1500)
      }
    }
  }

  return (
    <div
      className="w-[75%] flex sm:flex-row flex-col text-white justify-between items-center gap-2"
      ref={ContactRef}
    >
      <h1>Created by Brandon Rainey</h1>
      <div className="flex gap-2">
        <button className="border border-white/50 p-2 rounded-xl shadowInner">
          <a href="https://github.com/brandonrainey">
            <img
              src="/icons/githubIconWhite.png"
              alt="github"
              className="w-8"
            />
          </a>
        </button>
        <button className="border border-white/50 p-2 rounded-xl shadowInner">
          <a href="https://linkedin.com/in/brandon-rainey">
            <img src="/icons/linkedinIcon.png" alt="linkedin" className="w-8" />
          </a>
        </button>

        <button
          className="border border-white/50 p-2 rounded-xl relative shadowInner"
          onClick={() => copyToClipboard('brandonhrainey@gmail.com')}
        >
          {copySuccess && (
            <div className="absolute sm:-top-10 sm:-right-2 -right-[75px] border p-1 rounded-lg font-semibold bg-[#151229]">
              {copySuccess}
            </div>
          )}
          <img src="/icons/email.svg" alt="linkedin" className="w-8" />
        </button>
      </div>
    </div>
  )
}