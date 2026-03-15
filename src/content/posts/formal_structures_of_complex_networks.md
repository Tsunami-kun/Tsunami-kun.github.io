---
title: "复杂网络的形式结构 / Formal Structures of Complex Networks"
date: "2026-03-15"
originalDate: "2021-06-22"
tags: ["formal-philosophy", "Curry-Howard", "complex-networks", "type-theory", "AGI", "ontology"]
excerpt: "A complex network is simultaneously a mathematical object, a program, and a system of propositions. These are not three metaphors but one fact, readable through the Curry–Howard–Lambek correspondence. Reconstructed from a lost manuscript presented at Formal Philosophy 2021, HSE Moscow."
thumbnail: "/art/alice-falls-into-abyss.jpg"
---

> 名可名，非常名。
>
> "The name that can be named is not the enduring name."
>
> —— 老子 / Laozi, *道德经* Ch. 1

---

**中文** |
2021年秋天，我在线参加了莫斯科高等经济学院的 *Formal Philosophy* 会议，做了一个关于复杂网络形式结构的报告。那时 COVID 刚过高峰，世界各处的学者在各自的深夜或清晨隔着屏幕交谈。我在中国的凌晨听莫斯科傍晚的讨论，偶尔 Zoom 卡顿，一句话被吞掉一半；我们这些讨论 “nets 的形式结构” 的人，自己的 network link 反而并不稳定。

Network 通常先从图论对象写起，也就是

$$
G = (N, E)
$$

但我当时想说的是：复杂网络显然不止于这个最小定义。

**EN** |
In the autumn of 2021 I attended the *Formal Philosophy* conference at HSE Moscow online and presented a talk on the formal structures of complex networks. COVID had just passed its peak. Scholars around the world were speaking to each other across screens at their own odd hours. I sat in China past midnight listening to Moscow's early evening; Zoom would stutter, half a sentence would disappear, and those of us discussing the formal structure of nets were ourselves not especially well connected.

One usually starts a network with the minimal graph-theoretic object

$$
G = (N, E)
$$

But the whole point of the talk was that a complex network is obviously not exhausted by that smallest definition.

Networks are usually introduced as graphs or hypergraphs, which even undergraduates can understand quickly. At ShanghaiTech, for example, CS students meet discrete mathematics in the second semester of the first year and start thinking about graphs and max-flow min-cut early on. But complex networks are not exhausted by such a trivial definition. The observation that mattered to me was this: a complex network is a trinity. It is simultaneously a mathematical structure, a computational process, and a logical system. At the time I was considering a PhD in PL theory, and I took this insight to point directly toward the Curry–Howard–Lambek correspondence — or more strongly, toward the possibility that PL theory could supply a formal skeleton for ontology.

**日本語** |
2021年の秋、私はモスクワ高等経済学院の *Formal Philosophy* 会議にオンラインで参加し、複雑ネットワークの形式構造について報告した。COVID はちょうど峠を越えたころで、世界中の研究者たちはそれぞれの深夜や早朝に画面越しで話していた。私は中国の深夜にモスクワの夕方の議論を聞いていたが、ときどき Zoom が詰まり、文の半分が飲み込まれることもあった。「nets の形式構造」を論じている私たち自身の network link が、むしろあまり安定していなかったのである。

Network はまず最小のグラフ論的対象

$$
G = (N, E)
$$

として書かれる。だが、その最小定義だけで複雑ネットワークが尽きるわけではない、というのが当時の私の主張だった。

Network は普通、グラフやハイパーグラフとして導入され、undergrad にとっても比較的わかりやすい。たとえば上海科技大学では、CS の学生は一年生の後期に離散数学を学び、グラフや最大流最小カットのような対象を早い段階で考え始める。しかし、複雑ネットワークはそんな trivial な定義で尽きるものではない。私にとって重要だった観察はこうだ。複雑ネットワークは一つの trinity であり、同時に数学的構造であり、計算過程であり、論理体系でもある。当時の私は PL theory の PhD を考えていて、この insight の背後には Curry–Howard–Lambek correspondence があるのではないか、あるいは PL theory が本体論のための形式的な骨格を与えうるのではないか、と考えていた。

---

## Why three? / 三种对某一客体的阅读

**中文** |
拿一个具体的例子。秀丽隐杆线虫的神经连接组：302个神经元，约7,000个突触连接。你可以把它当作有向图来研究——算度分布，找小世界系数，识别枢纽神经元。这是数学阅读。但线虫会动。感觉神经元放电，中间神经元整合，运动神经元收缩肌肉。信息流过图；每个神经元变换它的输入。连接组在*计算*。这是第二种阅读。再注意一件事。"AVAL的输入可以影响尾部肌肉收缩"不仅是关于图的结构事实，它是一个*命题*——而实现它的具体神经通路是这个命题的*证明*。如果你切断腹神经索，便是使某些命题变得不可证。那么，我们有了“三种阅读”。问题是：它们是三个分立的描述，还是一件事物的三个面相？

**EN** |
Take something concrete: the *C. elegans* connectome, with 302 neurons and roughly 7,000 synaptic links. You can study it as a directed graph — degree distribution, small-world coefficient, hub neurons. That is the mathematical reading. But the worm also *moves*. Sensory neurons fire, interneurons integrate, motor neurons contract muscle. Information flows through the graph; each neuron transforms its inputs. The connectome computes. That is the second reading. And there is a third: the fact that input from AVAL can influence contraction in the tail is not merely a structural fact about a graph. It is a *proposition*, and the concrete neural pathway that realizes it is a *proof* of that proposition. Cut the ventral nerve cord and certain propositions become unprovable. So we arrive at three readings. The real question is whether they are three separate descriptions or three aspects of one thing.

**日本語** |
具体例を取ろう。秀麗隠杆線虫の神経コネクトームである。302 個のニューロンと約 7,000 本のシナプス結合からなる。これを有向グラフとして研究し、次数分布を調べ、小世界係数を計算し、ハブニューロンを同定することができる。これが数学的な読みである。だが線虫は実際に*動く*。感覚ニューロンが発火し、介在ニューロンが統合し、運動ニューロンが筋肉を収縮させる。情報はグラフを流れ、各ニューロンは入力を変換する。コネクトームは計算している。これが第二の読みである。さらに、「AVAL への入力が尾部筋の収縮に影響しうる」という事実は、単なる構造的事実ではない。それは一つの*命題*であり、その具体的な神経経路はその命題の*証明*である。腹神経索を切断すれば、いくつかの命題は不可証になる。こうして「三つの読み」が現れる。問題は、それらが三つの別々の記述なのか、それとも一つの対象の三つの面相なのか、ということだ。

---

## The Correspondence / 对应

**中文** |
Curry–Howard–Lambek 对应通常以最纯的形式陈述于直觉主义逻辑、类型化λ-演算和笛卡尔闭范畴之间。其内容不是这三者"类似"，而是它们*就是同一个数学结构*的三种记法。$A \Rightarrow (B \Rightarrow A)$ 的证明与 K 组合子 $\lambda x.\lambda y.\, x$ 与笛卡尔闭范畴中的某个态射，不是类比关系——是同一个东西。这件事的哲学分量不应被低估。它说的是：证明、计算、映射是同一活动的不同视角。我当时提出，这样的形式意味着背后存在统一的本体，或者说能够诱导出这些活动*本身是什么*的论点。

**EN** |
The Curry–Howard–Lambek correspondence is usually stated in its purest form between intuitionistic logic, typed lambda calculus, and cartesian closed categories. Its content is not that the three are "similar." It is that they are *three notations for the same mathematical structure*. A proof of $A \Rightarrow (B \Rightarrow A)$, the K combinator $\lambda x.\lambda y.\,x$, and the corresponding morphism in a cartesian closed category are not related by analogy — they are the same thing. The philosophical weight of this should not be underestimated. It says that proving, computing, and mapping are one activity seen from different viewpoints. My claim at the time was that such a formal identity gives us reason to talk about a unified ontology, or at least about an argument concerning what these activities *are*.

**日本語** |
Curry–Howard–Lambek correspondence は、もっとも純粋な形では直観主義論理、型付き λ 計算、そしてデカルト閉圏のあいだで語られる。その要点は、三者が「似ている」ということではない。三者は*同じ数学的構造の三つの記法*なのである。$A \Rightarrow (B \Rightarrow A)$ の証明、K コンビネータ $\lambda x.\lambda y.\,x$、そしてデカルト閉圏における対応する射は、比喩的に結びついているのではなく、まさに同じものである。このことの哲学的な重みは軽く見積もるべきではない。証明すること、計算すること、写像することは、一つの活動を異なる視点から見たものだと言っているからである。当時の私は、こうした形式的同一性の背後に統一的な本体を語る理由があるのではないか、少なくともそれらの活動*そのものが何であるか*を問う論点があるのではないか、と考えていた。

---

## Applying it to networks / 应用于网络

**中文** |
有向网络 $G$ 自然地同时落在这三列之中。首先，它的路径范畴可以严格写成

$$
\operatorname{Ob}(\mathbf{Path}(G)) = N,
\qquad
\operatorname{Hom}_{\mathbf{Path}(G)}(u,v)
= \{\text{paths } u \leadsto v\}
$$

如果 $G$ 是 DAG，邻接矩阵记为 $A$，那么从 $u$ 到 $v$ 的路径总数满足

$$
\#\operatorname{Path}_{u \to v}(G)
= \bigl[(I - A)^{-1}\bigr]_{uv}
$$

再给每个节点赋一个类型 $A_v$，给每条边赋一个类型化函数

$$
v \mapsto A_v,
\qquad
(u \to v) \mapsto f_{uv} : A_u \to A_v
$$

整个网络就成了一个类型化函数的图式，等价地，也是一项 $\lambda$-演算 $\Lambda_G$ 里的项。关键约束是：application 只能沿已有的边发生，$\beta$-归约就是消息传递。在 Curry–Howard 之下，每个类型 $A_u \to A_v$ 都是一个命题，良类型项是它的证明。可达性等于可证性，多条路径等于多个证明，证明规范化等于路径简化。

**EN** |
A directed network $G$ naturally inhabits all three columns. Its path category can be written precisely as

$$
\operatorname{Ob}(\mathbf{Path}(G)) = N,
\qquad
\operatorname{Hom}_{\mathbf{Path}(G)}(u,v)
= \{\text{paths } u \leadsto v\}
$$

If $G$ is a DAG with adjacency matrix $A$, then the number of paths from $u$ to $v$ is

$$
\#\operatorname{Path}_{u \to v}(G)
= \bigl[(I - A)^{-1}\bigr]_{uv}
$$

Now assign a type $A_v$ to each node and a typed function to each edge:

$$
v \mapsto A_v,
\qquad
(u \to v) \mapsto f_{uv} : A_u \to A_v
$$

The whole network becomes a diagram of typed functions — equivalently, a term in a $\lambda$-calculus $\Lambda_G$. The key restriction is that application can only happen along existing edges, so $\beta$-reduction becomes message passing. Under Curry–Howard, each type $A_u \to A_v$ is a proposition, and a well-typed term is its proof. Reachability becomes provability. Multiple paths become multiple proofs. Proof normalization becomes path simplification.

**日本語** |
有向ネットワーク $G$ は自然にこの三列のすべてに住んでいる。まず、その経路圏は

$$
\operatorname{Ob}(\mathbf{Path}(G)) = N,
\qquad
\operatorname{Hom}_{\mathbf{Path}(G)}(u,v)
= \{\text{paths } u \leadsto v\}
$$

と書ける。さらに $G$ が DAG で隣接行列を $A$ とすれば、$u$ から $v$ への経路総数は

$$
\#\operatorname{Path}_{u \to v}(G)
= \bigl[(I - A)^{-1}\bigr]_{uv}
$$

で与えられる。各ノードに型 $A_v$、各辺に型付き関数

$$
v \mapsto A_v,
\qquad
(u \to v) \mapsto f_{uv} : A_u \to A_v
$$

を割り当てれば、ネットワーク全体は型付き関数の図式、あるいは $\lambda$ 計算 $\Lambda_G$ の項として読める。重要な制約は、application が既存の辺に沿ってしか起きないことだ。$\beta$ 簡約はメッセージ伝達になる。Curry–Howard の下では、各型 $A_u \to A_v$ は命題であり、良い型をもつ項はその証明である。可達性は可証性になり、多重経路は複数の証明になり、証明の正規化は経路の簡約になる。

---

## Examples, worked through / 例子，详细展开

**中文** |
三个展开的例子。1） 引用三角形：三篇论文构成的引用网络中，两条路径是同一命题（"$r$ 在智识上下游于 $p$"）的两个不同证明，它们编码了不同的学术史。证明规范化的失败（中间论文 $q$ 并非简单的中继）本身就是有信息量的。2）蛋白质交互：受体→激酶→转录因子的信号级联可以严格类型化。激酶抑制剂阻断一条边，使 $A_R \to A_T$ 的命题变得不可证——药物在逻辑上"反驳"了一个关于细胞的命题。3. Erdős–Rényi 随机图：在渗流阈值 $p_c = 1/n$ 处，巨连通分量的涌现是一个*逻辑相变*，从大多数可达命题不可证的世界，到大多数可达命题可证的世界。临界指数 $-3/2$ 是普适的，这意味着证明空间相变的结构与具体命题无关。

**EN** |
Three worked examples make the point concrete. First, a citation triangle: in a network of three papers, two paths can be two distinct proofs of the same proposition — “$r$ is intellectually downstream of $p$” — and the failure of normalization tells us that the intermediate paper $q$ is not a mere relay. Second, protein interaction: a receptor → kinase → transcription factor cascade can be typed strictly, and a kinase inhibitor blocks one edge, making the proposition $A_R \to A_T$ unprovable. The drug logically “refutes” a proposition about the cell. Third, the Erdős–Rényi random graph: at the percolation threshold $p_c = 1/n$, the emergence of a giant connected component is a *logical phase transition* — a move from a world where most reachability propositions are unprovable to one where most of them are provable. The critical exponent $-3/2$ is universal, which means the structure of the proof-space phase transition does not depend on the particular propositions involved.

**日本語** |
三つの例でこの見方を具体化できる。第一に、引用三角形である。三本の論文から成る引用ネットワークでは、二本の経路が同じ命題――「$r$ は知的に $p$ の下流にある」――に対する二つの異なる証明になりうる。正規化が失敗すること自体が、途中の論文 $q$ が単なる中継ではないことを教えてくれる。第二に、タンパク質相互作用である。受容体 → キナーゼ → 転写因子というカスケードは厳密に型付けでき、キナーゼ阻害剤は一本の辺を遮断することで $A_R \to A_T$ という命題を不可証にする。薬は論理的な意味で、細胞についての一つの命題を「反駁」している。第三に、Erdős–Rényi ランダムグラフである。浸透閾値 $p_c = 1/n$ で巨大連結成分が出現することは、*論理相転移*として読める。すなわち、ほとんどの可達命題が不可証な世界から、ほとんどが可証になる世界への移行である。臨界指数 $-3/2$ は普遍的であり、証明空間相転移の構造が個別の命題内容に依存しないことを意味する。

---

## Dependent types and the scale-free case / 依赖类型与无标度情形

**中文** |
无标度网络的基本统计形态是

$$
P(k) \propto k^{-\gamma},
\qquad
C(k) \sim k^{-1}
$$

枢纽节点有极高的度，而大多数节点度为 1 或 2。这种异质性要求依赖类型：节点的类型签名依赖于它的度，输入是依赖积（所有前驱必须贡献），输出是依赖和（为每条消息选择一个后继）。Barabási–Albert 偏好连接过程在类型论阅读下变成一种*类型推断*：新节点通过选择与哪些已有类型复合，来确定自己的类型签名。偏好连接的意思是：优先与类型签名更丰富的节点复合。$C(k) \sim k^{-1}$ 又意味着，经过枢纽节点的证明更不容易有冗余，因而枢纽是*不可替代的*证明步骤；删除它们，会一次摧毁许多命题。这就是无标度网络对定向攻击脆弱性的类型论解释。

**EN** |
The basic statistical signature of a scale-free network is

$$
P(k) \propto k^{-\gamma},
\qquad
C(k) \sim k^{-1}
$$

Hub nodes have extremely high degree while most nodes have degree 1 or 2. This heterogeneity calls for dependent types: a node's type signature depends on its degree. Inputs become dependent products (all predecessors must contribute), and outputs become dependent sums (a successor is chosen for each message). Under this reading, the Barabási–Albert preferential attachment process becomes a form of *type inference*: a new node determines its own type signature by choosing which existing types to compose with. Preferential attachment says: compose first with nodes that have richer type signatures. The decay $C(k) \sim k^{-1}$ means that proofs passing through hubs are less likely to be redundant. Hubs become *irreplaceable* proof steps, and removing them destroys many propositions at once. This is the type-theoretic explanation of the fragility of scale-free networks under targeted attack.

**日本語** |
無標度ネットワークの基本的な統計的特徴は

$$
P(k) \propto k^{-\gamma},
\qquad
C(k) \sim k^{-1}
$$

である。ハブノードが非常に高い次数を持つ一方で、大多数のノードの次数は 1 か 2 である。この異質性は依存型を要求する。すなわち、ノードの型シグネチャがその次数に依存するのである。入力は依存積になり、出力は依存和になる。この読みの下では、Barabási–Albert の優先的選択過程は*型推論*に見える。新しいノードは、どの既存の型と合成するかを選ぶことで自分の型シグネチャを決めている。優先的選択とは、より豊かな型シグネチャをもつノードと優先的に合成せよということだ。さらに $C(k) \sim k^{-1}$ は、ハブを通る証明が冗長になりにくいことを意味する。ハブは*代替不可能な*証明ステップになり、それらを削除すると多くの命題が一度に壊れる。これは、無標度ネットワークが標的型攻撃に脆いことの型理論的説明である。

---

## Small worlds and proof shortcuts / 小世界与证明捷径

**中文** |
Watts–Strogatz 小世界模型的经典形状是

$$
L(p_{\mathrm{rw}}) \ll L(0),
\qquad
C(p_{\mathrm{rw}}) \approx C(0)
$$

也就是说，在中等重连概率 $p_{\mathrm{rw}}$ 下，网络同时具有短平均路径和高聚类。在证明空间中，这意味着局部证明仍然高度结构化，有许多经由三角形的替代证明；与此同时，远程证明通过随机捷径突然变得可用。小世界性质就是证明鲁棒性与证明效率的共存。Granovetter 所说的“弱连接的力量”，在 Curry–Howard 之下就是：一个弱连接是原本需要很长证明的命题的一条短证明。

**EN** |
In the Watts–Strogatz small-world model, the characteristic regime is

$$
L(p_{\mathrm{rw}}) \ll L(0),
\qquad
C(p_{\mathrm{rw}}) \approx C(0)
$$

An intermediate rewiring probability $p_{\mathrm{rw}}$ gives the network both short average path length and high clustering. In proof space this means: local proofs remain highly structured, with many alternatives through triangles, while long-range proofs become available through random shortcuts. The small-world property is therefore the coexistence of proof robustness and proof efficiency. What Granovetter called “the strength of weak ties” becomes, under Curry–Howard, the fact that a weak tie is a short proof of a proposition that would otherwise require a very long proof.

**日本語** |
Watts–Strogatz の小世界モデルでは、特徴的な領域は

$$
L(p_{\mathrm{rw}}) \ll L(0),
\qquad
C(p_{\mathrm{rw}}) \approx C(0)
$$

で表される。すなわち、中程度の再配線確率 $p_{\mathrm{rw}}$ のもとで、ネットワークは短い平均経路長と高いクラスタリングを同時にもつ。証明空間で言えば、局所的な証明は三角形を通る多数の代替経路によって高く構造化されたままであり、その一方で遠距離の証明はランダムなショートカットによって利用可能になる。小世界性とは、証明のロバスト性と証明の効率の共存である。Granovetter のいう「弱い紐帯の強さ」は、Curry–Howard の下では、本来なら非常に長い証明を要する命題に対する短い証明として読み直される。

---

## Information and proof / 信息与证明

**中文** |
信息论量也可以直接写成数学式。若 $p(k)$ 是度分布，那么

$$
H(G) = - \sum_k p(k)\log p(k)
$$

衡量的是节点类型的多样性；若 $\rho$ 是由图拉普拉斯矩阵归一化得到的密度矩阵，那么

$$
S_{\mathrm{VN}}(G) = -\operatorname{Tr}(\rho \log \rho)
$$

就是网络的 von Neumann 熵。放到 Curry–Howard 里，前者是类型空间的熵，后者度量证明空间支持多少独立的推理模式。节点间互信息的证明论解释则是：它衡量涉及 $u$ 的证明在多大程度上约束涉及 $v$ 的证明。这连接到相关逻辑——有效证明必须*使用*其假设。当互信息为零，两处的证明独立；当互信息高，它们在证明论意义上纠缠。

**EN** |
The information-theoretic invariants can be written explicitly. If $p(k)$ is the degree distribution, then

$$
H(G) = - \sum_k p(k)\log p(k)
$$

measures the diversity of node types. If $\rho$ is the density matrix obtained from a normalized graph Laplacian, then

$$
S_{\mathrm{VN}}(G) = -\operatorname{Tr}(\rho \log \rho)
$$

is the network's von Neumann entropy. Under Curry–Howard, the first becomes the entropy of the type space, while the second measures how many independent modes of inference the proof space can support. Mutual information between two nodes has a proof-theoretic reading as well: it tells us how strongly a proof involving $u$ constrains possible proofs involving $v$. This links network theory to relevance logic, where a valid proof must *use* its hypotheses. When mutual information is zero, the two proof spaces are independent; when it is high, they are entangled in a proof-theoretic sense.

**日本語** |
情報理論的な量も明示的に書ける。次数分布を $p(k)$ とすれば、

$$
H(G) = - \sum_k p(k)\log p(k)
$$

はノード型の多様性を測る。さらに、正規化ラプラシアンから得られる密度行列を $\rho$ とすれば、

$$
S_{\mathrm{VN}}(G) = -\operatorname{Tr}(\rho \log \rho)
$$

がネットワークの von Neumann エントロピーになる。Curry–Howard の下では、前者は型空間のエントロピー、後者は証明空間がどれだけ多くの独立した推論モードを支えられるかの尺度になる。二つのノードのあいだの相互情報量にも証明論的な読みがある。それは、$u$ を含む証明が $v$ を含む証明の可能性をどれほど制約するか、という量である。これは関連論理とつながる。関連論理では、有効な証明はその仮定を*実際に使わなければならない*。相互情報量がゼロなら二つの証明空間は独立であり、高ければ証明論的な意味で絡み合っている。

---

## Functorial semantics / 函子语义

**中文** |
函子 $F: \mathbf{Path}(G) \to \mathbf{Set}$ 给每个节点赋一个状态集，给每条路径赋一个状态转移函数。不同的函子是同一拓扑上的不同动力学。自然变换是两种动力学的一致比较。米田引理说：节点 $v$ 在动力学 $F$ 下的状态完全由*从 $v$ 出发*的证明结构决定。一个节点的身份由它的对外关系穷尽。这是结构主义的数学表述。

**EN** |
A functor $F: \mathbf{Path}(G) \to \mathbf{Set}$ assigns a state set to each node and a state-transition function to each path. Different functors are different dynamics on the same topology. Natural transformations are coherent comparisons between those dynamics. The Yoneda lemma then says that the state of a node $v$ under a dynamics $F$ is completely determined by the proof structure that *starts* at $v$. A node's identity is exhausted by its outward relations. This is a mathematical expression of structuralism.

**日本語** |
函手 $F: \mathbf{Path}(G) \to \mathbf{Set}$ は、各ノードに状態集合を、各経路に状態遷移関数を割り当てる。同じトポロジーの上で異なる函手を選べば、それは異なるダイナミクスになる。自然変換は、その二つのダイナミクスを整合的に比較する方法である。そして米田の補題は、力学 $F$ のもとでノード $v$ の状態が、*$v$ から出発する*証明構造によって完全に決まることを示す。ノードの同一性は、その外向きの関係によって尽くされる。これは構造主義の数学的表現である。

---

## 2026 Postscript: What networks are now / 2026年后记：网络现在是什么

**中文** |
2021年我在HSE报告时，典型的复杂网络是社交图谱、生物交互图、基础设施拓扑，它们是典范的*研究对象*。五年后，情况变了。Transformer的注意力机制是一个动态生成的网络：注意力矩阵定义了token上的加权有向图，value计算就是 $\Lambda_G$ 中的消息传递步骤，每个注意力头是一个函子 $\mathbf{Path}(G_{\text{attn}}) \to \mathbf{Vect}$。Transformer的前向传播是一个*证明*。当transformer产生幻觉时，它构造了一个语法有效但语义荒谬的证明（类型安全不保证语义正确）。
多智能体系统中，编排失败就是类型错误。人机协作网络中，复合函数 $f_{\text{Claude}} \circ f_{\text{human}}$ 产生任何单一节点都无法独自计算的产物，这是否是类型意义上的涌现？

**EN** |
When I spoke at HSE in 2021, the canonical complex networks were social graphs, biological interaction maps, and infrastructure topologies — classic *objects of study*. Five years later that picture has changed. A transformer's attention mechanism is a dynamically generated network: the attention matrix defines a weighted directed graph over tokens, value computation is a message-passing step in $\Lambda_G$, and each attention head is a functor $\mathbf{Path}(G_{\text{attn}}) \to \mathbf{Vect}$. A transformer's forward pass can therefore be read as a *proof*. When a transformer hallucinates, it constructs a syntactically valid but semantically absurd proof; type safety does not guarantee semantic correctness. In multi-agent systems, orchestration failure is a type error. And in human–AI collaboration, the composite function $f_{\text{Claude}} \circ f_{\text{human}}$ produces artifacts that no single node can compute alone. Is that emergence in the typed sense? That is the newer question.

**日本語** |
2021 年に HSE で話したとき、典型的な複雑ネットワークは、社会グラフ、生物学的相互作用図、インフラのトポロジーといった、典型的な*研究対象*だった。だが五年後には状況が変わった。Transformer の attention 機構は動的に生成されるネットワークであり、attention 行列は token 上の重み付き有向グラフを定義し、value 計算は $\Lambda_G$ におけるメッセージ伝達であり、各 attention head は函手 $\mathbf{Path}(G_{\text{attn}}) \to \mathbf{Vect}$ と読める。Transformer の forward pass は一つの*証明*として読めるのである。hallucination とは、文法的には妥当だが意味的には荒唐無稽な証明を構成してしまうことだ。型安全性は意味の正しさを保証しない。多エージェント系では、編成の失敗は型エラーである。さらに、人間と AI の協働では、合成関数 $f_{\text{Claude}} \circ f_{\text{human}}$ が、どの単独ノードも一人では計算できない産物を生み出す。これは型理論的な意味での涌現なのか。いま私を惹きつけているのはその問いである。

---

## Ontological discussion / 本体论讨论

**中文** |
Curry–Howard 阅读迫使我们面对一个网络科学基本上满足于回避的问题：网络在本体论上*是什么*？主流网络科学的工作假设是工具主义的：网络是有用的表示。我们选择什么算节点、什么算边。在工具主义下，三重阅读只是关于我们表征的巧合。我想反对这一点，但也承认没有非常有力的证据（谁能说明我们的数学形式不是一种宇宙的巧合呢？）。Curry–Howard 对应不是关于表征的事实，而是关于*构造性推理之结构本身*的事实。当我们发现一个网络同时具有三种面相，我们不是在把自己的范畴投射到它身上——我们是在识别出网络参与了使推理成为可能的那个结构。这接近 Ladyman 和 Ross 的"本体结构实在论"：真正存在的是*结构*——关系的模式——而非承载关系的对象。网络不是节点和边的集合，而是关系模式，节点是模式中的*位置*。Curry–Howard 对应告诉我们，任何足够丰富以支持复合的结构都必然有逻辑、计算、数学三个方面。

但有个微妙之处。并非所有网络都同等地"逻辑化"或"计算化"。没有路径的网络有平凡的证明空间。完全图的证明空间最大限度丰富但没有有趣的结构。真正出现在生物、社会和技术中的网络处于两者之间：证明空间有足够的结构使之非平凡，有足够的空隙使之有信息量。Curry–Howard 阅读恰恰在证明空间*有结构但不完备*的地方最有揭示力。这暗示了一个定义：**复杂**（complex)网络，区别于仅仅复杂的（complicated）网络，是证明空间既非平凡也非平凡完备的网络,而逻辑结构在其中做了实质工作。复杂性是一种证明论性质。

**EN** |
The Curry–Howard reading forces network science to face a question it has usually been content to avoid: what *is* a network, ontologically? The working assumption in mainstream network science is instrumentalist. A network is a useful representation; we choose what counts as a node and what counts as an edge. Under that view, the threefold reading is merely a coincidence of representation. I want to resist that, while admitting that the evidence is not overwhelming. Curry–Howard is not a fact about representation but about the *structure of constructive reasoning itself*. When a network admits three readings, we are not projecting our categories onto it; we are recognizing that it participates in the structure that makes reasoning possible. This is close to Ladyman and Ross's ontic structural realism: what fundamentally exists is *structure* — patterns of relation — rather than objects that merely stand in relations. A network is not a collection of nodes and edges but a relational pattern, and nodes are positions within that pattern. Still, not every network is equally logical or equally computational. An edgeless network has a trivial proof space; a complete graph has an over-rich but uninformative one. The revealing case is where the proof space is *structured but incomplete*. That suggests a definition: a **complex** network, as opposed to a merely complicated one, is a network whose proof space is neither trivial nor trivially complete, one in which logical structure does real work. Complexity, on this view, is a proof-theoretic property.

**日本語** |
Curry–Howard 的な読みは、ネットワーク科学がこれまでかなり回避してきた問いを突きつける。ネットワークは本体論的に*何であるのか*。主流のネットワーク科学の作業仮説は道具主義である。ネットワークとは有用な表現にすぎず、何をノードとし何を辺とするかは私たちが決める。その立場では、三重の読みは表現上の偶然にすぎない。私はこれに慎重に反論したい。ただし、決定的な証拠があると言いたいわけでもない。Curry–Howard correspondence は表現についての事実ではなく、*構成的推論そのものの構造*についての事実である。あるネットワークが三つの読みを許すとき、私たちは自分のカテゴリーを投影しているのではなく、推論を可能にしている構造への参与を認識しているのである。これは Ladyman と Ross のいう ontic structural realism に近い。根本的に存在するのは*構造*、すなわち関係のパターンであって、関係に入る物体ではない。ネットワークはノードと辺の集合ではなく、関係のパターンであり、ノードはその中の位置である。とはいえ、すべてのネットワークが同じ程度に「論理的」でも「計算的」でもない。経路のないネットワークは自明な証明空間しか持たず、完全グラフは証明空間が極度に豊かでも情報をほとんど区別しない。もっとも示唆的なのは、証明空間が*構造化されているが不完備*である場合である。そこから一つの定義が見えてくる。単に complicated なだけのネットワークではなく、**complex** なネットワークとは、証明空間が自明でも自明に完備でもなく、論理構造が実質的な仕事をしているネットワークである。複雑性とは、この見方では証明論的な性質なのである。

---

## Coda: The night in Moscow / 尾声：莫斯科之夜

**中文** |
我重构这个2021年（我还是本科生的时候）的文稿，也是被一个最新的问题吸引：在一个多智能体的时代，人类-AI共同参与社区言说的时代，openclaw和metaclaw的时代，不得不反思网络中的部分-整体关系：社区是网络的*部分*，还是网络是社区的*组合*？在范畴中，答案是两者皆是，因为子对象和商是对偶构造，但这丝毫不说明问题。当然，这篇文稿中的想法没有完成。充其量，它是一个证明草图，一个我尚未完全指定的类型系统中的不完整项。复杂网络仍在被建造、被发现、在不合理的时间通过不稳定的网络连接着人们。Curry–Howard 对应说，这些连接的结构就是推理本身的结构。这到底是深刻的还是仅仅是形式的，我不确定。但这个问题本身（"这是真正本体论的还是仅仅形式的？）是一个关于证明与意义之关系的问题，而 Curry–Howard 对应对此也有话要说。

**EN** |
I rebuilt this 2021 manuscript — from my undergraduate years — because a newer question began to pull at it. In an age of multi-agent systems, of human–AI participation in public discourse, of openclaw and metaclaw, we are forced to think again about part–whole relations in networks. Is a community a *part* of a network, or is the network a *composition* of communities? In category theory the answer is both, because subobjects and quotients are dual constructions, but that still does not settle the matter. The ideas in this manuscript are unfinished. At best it is a proof sketch, an incomplete term in a type system I have not fully specified. Complex networks are still being built, still being discovered, still connecting people at unreasonable hours through unstable links. Curry–Howard says that the structure of those connections is the structure of reasoning itself. I still do not know whether that is deep or merely formal. But the question itself — “is this genuinely ontological, or merely formal?” — is already a question about the relation between proof and meaning, and Curry–Howard has something to say about that too.

**日本語** |
私がこの 2021 年の原稿――まだ学部生だったころの原稿――を再構成したのも、より新しい問いに引かれたからである。多エージェントの時代、人間と AI が共同でコミュニティの言説に参加する時代、openclaw と metaclaw の時代には、ネットワークにおける部分と全体の関係を改めて考えざるをえない。コミュニティはネットワークの*部分*なのか、それともネットワークはコミュニティの*組成*なのか。圏論では、子対象と商が双対構成なので、答えは両方だと言える。だが、それで問題が片付くわけではない。この原稿のアイデアはまだ未完成である。せいぜい、まだ完全には指定していない型体系の中の不完全な項、すなわち一つの proof sketch にすぎない。複雑ネットワークはいまも構築され、発見され、理不尽な時間帯に不安定な接続を通じて人々を結びつけている。Curry–Howard correspondence は、それらの接続の構造こそが推論そのものの構造だと言う。それが深いのか、単に形式的なのか、私はまだわからない。だが、その問い自体――「これは本当に本体論的なのか、それとも単に形式的なのか」――が、すでに証明と意味の関係についての問いであり、Curry–Howard もまたそこに対して何かを語っている。

---

## References

1. Albert, R., Jeong, H. & Barabási, A.-L. (2000). "Error and Attack Tolerance of Complex Networks." *Nature*, 406(6794), 378–382.
2. Baez, J.C. & Stay, M. (2011). "Physics, Topology, Logic and Computation: A Rosetta Stone." In *New Structures for Physics*, Springer LNP 813, pp. 95–172.
3. Barabási, A.-L. (2016). *Network Science*. Cambridge University Press.
4. Barabási, A.-L. & Albert, R. (1999). "Emergence of Scaling in Random Networks." *Science*, 286(5439), 509–512.
5. Watts, D.J. & Strogatz, S.H. (1998). "Collective Dynamics of 'Small-World' Networks." *Nature*, 393(6684), 440–442.
6. Martin-Löf, P. (1984). *Intuitionistic Type Theory*. Bibliopolis, Naples.
7. Curry, H.B. (1934). "Functionality in Combinatory Logic." *Proceedings of the National Academy of Sciences*, 20(11), 584–590.
8. Howard, W.A. (1969/1980). "The Formulae-as-Types Notion of Construction." In *To H.B. Curry: Essays on Combinatory Logic, Lambda Calculus and Formalism*, Academic Press, pp. 479–490.
9. Lambek, J. (1972). "Deductive Systems and Categories III." In *Toposes, Algebraic Geometry and Logic*, Springer LNM 274, pp. 57–82.
10. Anderson, A.R. & Belnap, N.D. (1975). *Entailment: The Logic of Relevance and Necessity*, Vol. 1. Princeton University Press.
11. Braunstein, S.L., Ghosh, S. & Severini, S. (2006). "The Laplacian of a Graph as a Density Matrix: A Basic Combinatorial Approach to Separability of Mixed States." *Annals of Combinatorics*, 10(3), 291–317.
12. Granovetter, M.S. (1973). "The Strength of Weak Ties." *American Journal of Sociology*, 78(6), 1360–1380.
13. Humphries, M.D. & Gurney, K. (2008). "Network 'Small-World-Ness': A Quantitative Method for Determining Canonical Network Equivalence." *PLoS ONE*, 3(4), e0002051.
14. Mac Lane, S. (1998). *Categories for the Working Mathematician*, 2nd ed. Springer GTM 5.
15. Fong, B. & Spivak, D.I. (2019). *An Invitation to Applied Category Theory: Seven Sketches in Compositionality*. Cambridge University Press.
16. Ladyman, J. & Ross, D. (2007). *Every Thing Must Go: Metaphysics Naturalized*. Oxford University Press.
17. Wadler, P. (2015). "Propositions as Types." *Communications of the ACM*, 58(12), 75–84.
18. Shao, Y. (2021). "Formal Structures of Complex Networks." Presented at *International Conference 'Formal Philosophy 2021'*, National Research University Higher School of Economics, Moscow. https://llfp.hse.ru/en/formalphilosophy/2021/
19. de Bruijn, N.G. (1968). "AUTOMATH, a Language for Mathematics." Technical Report 68-WSK-05, Eindhoven University of Technology.
20. Erdős, P. & Rényi, A. (1959). "On Random Graphs I." *Publicationes Mathematicae Debrecen*, 6, 290–297.
21. Vaswani, A., Shazeer, N., Parmar, N., et al. (2017). "Attention Is All You Need." *NeurIPS 2017*.
