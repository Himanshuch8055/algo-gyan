// ProblemDetail.js
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaCheck, FaLightbulb, FaCode, FaTerminal, FaList, FaUsers, FaMoon, FaSun } from 'react-icons/fa';
import Editor from '@monaco-editor/react';

export default function ProblemDetail({ theme, toggleTheme }) {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('description');
  const [code, setCode] = useState('// Write your code here');
  const [language, setLanguage] = useState('javascript');
  const [showHints, setShowHints] = useState(false);
  const [hintUnlocked, setHintUnlocked] = useState(false);

  // Mock data - in a real app, this would come from an API
  const problem = {
    id: 1,
    title: 'Two Sum',
    difficulty: 'easy',
    tags: ['Array', 'Hash Table'],
    description: `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.`,
    examples: [
      {
        input: 'nums = [2,7,11,15], target = 9',
        output: '[0,1]',
        explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].'
      },
      {
        input: 'nums = [3,2,4], target = 6',
        output: '[1,2]',
        explanation: 'Because nums[1] + nums[2] == 6, we return [1, 2].'
      }
    ],
    constraints: [
      '2 <= nums.length <= 10^4',
      '-10^9 <= nums[i] <= 10^9',
      '-10^9 <= target <= 10^9',
      'Only one valid answer exists.'
    ],
    hints: [
      'A really brute force way would be to search for all possible pairs of numbers but that would be too slow.',
      'So, we can use a hashmap to store the values we have seen so far.',
      'For each number in the array, check if the complement (target - current number) exists in the hashmap.'
    ]
  };

  const unlockHint = () => {
    setHintUnlocked(true);
    setShowHints(true);
  };

  const handleRunCode = () => {
    console.log('Running code:', code);
  };

  const handleSubmit = () => {
    console.log('Submitting code:', code);
  };

  return (
    <div className={`flex flex-col h-screen pt-16 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Header */}
      <div className={`shadow ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/problems" className={`flex items-center ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
              <FaArrowLeft className="mr-2" />
              Back to Problems
            </Link>
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                {theme === 'dark' ? <FaSun /> : <FaMoon />}
              </button>
              <button
                onClick={handleRunCode}
                className={`px-4 py-2 rounded-md flex items-center ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}
              >
                <FaTerminal className="mr-2" />
                Run Code
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-md flex items-center"
              >
                <FaCheck className="mr-2" />
                Submit
              </button>
            </div>
          </div>
          <h1 className="text-2xl font-bold mt-4">{problem.title}</h1>
          <div className="flex items-center mt-2 space-x-4">
            <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
              problem.difficulty === 'easy' ? 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200' :
              problem.difficulty === 'medium' ? 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200' :
              'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200'
            }`}>
              {problem.difficulty.charAt(0).toUpperCase() + problem.difficulty.slice(1)}
            </span>
            <div className="flex space-x-2">
              {problem.tags.map((tag, index) => (
                <span key={index} className={`text-xs px-2 py-1 rounded ${theme === 'dark' ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-800'}`}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Problem Description */}
        <div className={`w-1/2 h-full overflow-y-auto p-6 border-r ${theme === 'dark' ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'}`}>
          <div className={`flex border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} mb-4`}>
            <button
              className={`px-4 py-2 font-medium ${activeTab === 'description' ? 'text-amber-500 border-b-2 border-amber-500' : 'text-gray-500 dark:text-gray-400'}`}
              onClick={() => setActiveTab('description')}
            >
              Description
            </button>
            <button
              className={`px-4 py-2 font-medium ${activeTab === 'solutions' ? 'text-amber-500 border-b-2 border-amber-500' : 'text-gray-500 dark:text-gray-400'}`}
              onClick={() => setActiveTab('solutions')}
            >
              Solutions
            </button>
            <button
              className={`px-4 py-2 font-medium ${activeTab === 'discuss' ? 'text-amber-500 border-b-2 border-amber-500' : 'text-gray-500 dark:text-gray-400'}`}
              onClick={() => setActiveTab('discuss')}
            >
              Discuss
            </button>
          </div>

          {activeTab === 'description' && (
            <div className="prose max-w-none">
              <p className="whitespace-pre-line">{problem.description}</p>

              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-2">Examples:</h3>
                {problem.examples.map((example, index) => (
                  <div key={index} className={`p-4 rounded-md mb-4 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}`}>
                    <div className="mb-2">
                      <span className="font-medium">Input:</span> {example.input}
                    </div>
                    <div className="mb-2">
                      <span className="font-medium">Output:</span> {example.output}
                    </div>
                    {example.explanation && (
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        <span className="font-medium">Explanation:</span> {example.explanation}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-2">Constraints:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {problem.constraints.map((constraint, index) => (
                    <li key={index} className="text-sm text-gray-700 dark:text-gray-300">
                      {constraint}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold">Hints</h3>
                  {!hintUnlocked && (
                    <button
                      onClick={unlockHint}
                      className="flex items-center text-sm text-amber-500 hover:text-amber-700"
                    >
                      <FaLightbulb className="mr-1" />
                      Unlock Hints
                    </button>
                  )}
                </div>
                {showHints && (
                  <div className={`p-4 rounded-md ${theme === 'dark' ? 'bg-gray-700' : 'bg-amber-50'}`}>
                    <ol className="list-decimal pl-5 space-y-2">
                      {problem.hints.map((hint, index) => (
                        <li key={index} className="text-sm text-gray-700 dark:text-gray-300">
                          {hint}
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'solutions' && (
            <div className="text-center py-8 text-gray-500 dark:text-gray-400">
              <FaCode className="text-4xl mx-auto mb-4 text-gray-300 dark:text-gray-500" />
              <p>Solutions are only available after solving the problem.</p>
              <p className="text-sm mt-2">Keep trying or check the hints if you're stuck!</p>
            </div>
          )}

          {activeTab === 'discuss' && (
            <div className="text-center py-8 text-gray-500 dark:text-gray-400">
              <FaUsers className="text-4xl mx-auto mb-4 text-gray-300 dark:text-gray-500" />
              <p>Join the discussion for this problem.</p>
              <button className="mt-4 px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700">
                View Discussion
              </button>
            </div>
          )}
        </div>

        {/* Code Editor */}
        <div className="w-1/2 h-full flex flex-col">
          <div className={`p-2 flex justify-between items-center ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-900'}`}>
            <div className="flex items-center space-x-4">
              <button
                className={`px-3 py-1 rounded ${activeTab === 'code' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:text-white dark:bg-gray-700'}`}
                onClick={() => setActiveTab('code')}
              >
                <FaCode className="inline mr-1" /> Code
              </button>
              <button
                className={`px-3 py-1 rounded ${activeTab === 'testcases' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:text-white dark:bg-gray-700'}`}
                onClick={() => setActiveTab('testcases')}
              >
                <FaList className="inline mr-1" /> Test Cases
              </button>
            </div>
            <div>
              <select
                className="bg-gray-700 text-white text-sm rounded px-2 py-1 focus:outline-none"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option value="javascript">JavaScript</option>
                <option value="python">Python</option>
                <option value="java">Java</option>
                <option value="cpp">C++</option>
              </select>
            </div>
          </div>

          <div className="flex-1 bg-gray-900 text-white p-4 overflow-auto">
            {activeTab === 'code' && (
              <Editor
                height="100%"
                width="100%"
                language={language}
                value={code}
                onChange={(value) => setCode(value || '')}
                theme={theme === 'dark' ? 'vs-dark' : 'vs-light'}
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                  wordWrap: 'on',
                }}
              />
            )}
            {activeTab === 'testcases' && (
              <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                <p>Test cases will be displayed here.</p>
              </div>
            )}
          </div>

          <div className={`p-3 border-t flex justify-between items-center ${theme === 'dark' ? 'border-gray-700 bg-gray-800 text-white' : 'border-gray-200 bg-gray-100 text-gray-900'}`}>
            <div className="text-sm text-gray-400">
              Press Ctrl+Enter to run
            </div>
            <div className="flex space-x-2">
              <button
                onClick={handleRunCode}
                className="px-4 py-1 bg-gray-700 hover:bg-gray-600 rounded text-sm text-white"
              >
                Run
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-1 bg-amber-600 hover:bg-amber-700 rounded text-sm text-white"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
