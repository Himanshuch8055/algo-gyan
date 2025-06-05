import { motion } from 'framer-motion';

const CodeEditor = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="relative group"
  >
    <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-cyan-500 rounded-2xl opacity-70 group-hover:opacity-100 blur-xl transition duration-300 group-hover:duration-200 -z-10"></div>
    
    <div className="relative bg-gray-900/80 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm">
      <div className="flex items-center justify-between px-4 py-3 bg-gray-900/50 border-b border-white/5">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-amber-500 hover:bg-amber-400 transition-colors cursor-pointer"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500 hover:bg-amber-400 transition-colors cursor-pointer"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500 hover:bg-amber-400 transition-colors cursor-pointer"></div>
        </div>
        <div className="text-xs text-gray-500 font-mono">binarySearch.js</div>
      </div>
      
      <div className="p-6 font-mono text-sm leading-relaxed">
        <div className="text-gray-500 text-xs mb-4">// Binary Search Implementation</div>
        <div className="space-y-1">
          <div>
            <span className="text-purple-400">function</span>{' '}
            <span className="text-amber-400">binarySearch</span>
            <span className="text-white">(</span>
            <span className="text-amber-200">arr</span>
            <span className="text-gray-500">, </span>
            <span className="text-amber-200">target</span>
            <span className="text-white">) </span>
            <span className="text-white">{'{'}</span>
          </div>
          
          <div className="pl-6 space-y-1">
            <div>
              <span className="text-amber-400">let </span>
              <span className="text-amber-200">left</span>
              <span className="text-white"> = </span>
              <span className="text-amber-400">0</span>
              <span className="text-gray-500">;</span>
            </div>
            <div>
              <span className="text-amber-400">let </span>
              <span className="text-amber-200">right</span>
              <span className="text-white"> = </span>
              <span className="text-amber-200">arr</span>
              <span className="text-gray-500">.</span>
              <span className="text-amber-300">length</span>
              <span className="text-white"> - </span>
              <span className="text-amber-400">1</span>
              <span className="text-gray-500">;</span>
            </div>
            
            <div className="pt-2">
              <span className="text-purple-400">while </span>
              <span className="text-white">(</span>
              <span className="text-amber-200">left</span>
              <span className="text-white"> &lt;= </span>
              <span className="text-amber-200">right</span>
              <span className="text-white">) </span>
              <span className="text-white">{'{'}</span>
            </div>
            
            <div className="pl-6 space-y-1">
              <div>
                <span className="text-amber-400">const </span>
                <span className="text-amber-200">mid</span>
                <span className="text-white"> = </span>
                <span className="text-amber-300">Math</span>
                <span className="text-gray-500">.</span>
                <span className="text-amber-300">floor</span>
                <span className="text-white">((</span>
                <span className="text-amber-200">left</span>
                <span className="text-white"> + </span>
                <span className="text-amber-200">right</span>
                <span className="text-white">) / </span>
                <span className="text-amber-400">2</span>
                <span className="text-white">)</span>
                <span className="text-gray-500">;</span>
              </div>
              
              <div>
                <span className="text-purple-400">if </span>
                <span className="text-white">(</span>
                <span className="text-amber-200">arr</span>
                <span className="text-white">[</span>
                <span className="text-amber-200">mid</span>
                <span className="text-white">] === </span>
                <span className="text-amber-200">target</span>
                <span className="text-white">) </span>
                <span className="text-white">{'{'}</span>
              </div>
              
              <div className="pl-6 text-amber-400">
                <span className="text-amber-400">return mid</span>
                <span className="text-gray-500">;</span>
              </div>
              
              <div className="text-white">}</div>
              
              <div>
                <span className="text-purple-400">if </span>
                <span className="text-white">(</span>
                <span className="text-amber-200">arr</span>
                <span className="text-white">[</span>
                <span className="text-amber-200">mid</span>
                <span className="text-white">] &lt; </span>
                <span className="text-amber-200">target</span>
                <span className="text-white">) </span>
                <span className="text-white">{'{'}</span>
              </div>
              
              <div className="pl-6">
                <span className="text-amber-200">left</span>
                <span className="text-white"> = </span>
                <span className="text-amber-200">mid</span>
                <span className="text-white"> + </span>
                <span className="text-amber-400">1</span>
                <span className="text-gray-500">;</span>
              </div>
              
              <div className="text-white">} <span className="text-purple-400">else</span> {'{'}</div>
              
              <div className="pl-6">
                <span className="text-amber-200">right</span>
                <span className="text-white"> = </span>
                <span className="text-amber-200">mid</span>
                <span className="text-white"> - </span>
                <span className="text-amber-400">1</span>
                <span className="text-gray-500">;</span>
              </div>
              
              <div className="text-white">}</div>
            </div>
            
            <div className="text-white">  }</div>
            
            <div>
              <span className="text-purple-400">return </span>
              <span className="text-amber-400">-1</span>
              <span className="text-gray-500">;</span>
            </div>
          </div>
          
          <div className="text-white">{'}'}</div>
          
          <div className="mt-4 pt-4 border-t border-white/5 text-xs text-gray-500">
            <div className="flex items-center space-x-2 mb-1">
              <span className="text-amber-400">✓</span>
              <span>Time Complexity: O(log n)</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-amber-400">✓</span>
              <span>Space Complexity: O(1)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

export default CodeEditor;
